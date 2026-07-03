import path from "path";
import fs from "fs";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const blogDB = await notion.databases.retrieve({
  database_id: process.env.NOTION_BLOGS_ID,
});

export const getBlogs = async () => {
  return await notion.dataSources.query({
    data_source_id: blogDB.data_sources[0].id,
  });
};

export const getPage = async (pageID) => {
  return await notion.pages.retrieveMarkdown({
    page_id: pageID,
  });
};

// Config paths for saving data
const dir = "./public";
const filePath = "./public/blogs.json";
const blogDir = path.join(dir, "blogs");

export const writeJsonFile = (targetPath, data) => {
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
};

const handlePage = async (cleanData) => {
  const pageIds = cleanData.map((page) => page.id);

  await Promise.all(
    pageIds.map(async (pageID) => {
      const page = await getPage(pageID);
      let allMarkdown = page.markdown;

      for (const blockId of page.unknown_block_ids) {
        const blockResp = await notion.pages.retrieveMarkdown({
          page_id: blockId,
        });
        allMarkdown += "\n" + blockResp.markdown;
      }

      writeJsonFile(path.join(blogDir, `${pageID}.json`), {
        id: pageID,
        content: allMarkdown,
      });
    }),
  );
};

async function main() {
  try {
    console.log("Đang lấy dữ liệu từ Notion...");
    const blogs = await getBlogs();

    const cleanData = blogs.results.map((page) => {
      return {
        id: page.id,
        title: page.properties["Doc name"]?.title?.[0]?.plain_text || "",
        description: page.properties["Description"]?.rich_text?.[0]?.plain_text || "",
        categories: page.properties["Category"]?.multi_select || [],
      };
    });

    writeJsonFile(filePath, cleanData);
    await handlePage(cleanData);

    console.log("Thành công! File đã được lưu tại: " + filePath);
    console.log("Tổng số bài viết:", cleanData.length);
    console.log("Đã xuất nội dung từng bài viết vào thư mục:", path.join(dir, "blogs"));
  } catch (error) {
    console.error("Lỗi:", error);
    process.exit(1);
  }
}

main();
