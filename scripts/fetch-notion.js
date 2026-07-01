import { Client } from "@notionhq/client"
import fs from "fs"
import dotenv from "dotenv";
dotenv.config();

const dir = '../public/data';
const filePath = '../public/data/blogs.json';

// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const blogDB = await notion.databases.retrieve({
    database_id: process.env.NOTION_BLOGS_ID
})

const getBlogs = async () => {
    return await notion.dataSources.query({
        data_source_id: blogDB.data_sources[0].id,
        // filter: {
        //     property: "Created time",
        // },
    })
}
const writeJsonFile = (targetPath, data) => {
    const targetDir = path.dirname(targetPath);

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
}

const handlePage = async (cleanData) => {
    const blogDir = path.join(dir, "blogs");
    const pageIds = cleanData.map((page) => page.id);

    await Promise.all(
        pageIds.map(async (pageID) => {
            const markdown = await getPage(pageID);

            let allMarkdown = response.markdown;

            for (const blockId of response.unknown_block_ids) {
                const blockResp = await notion.pages.retrieveMarkdown({
                    page_id: blockId,
                });
                allMarkdown += "\n" + blockResp.markdown;
            }

            writeJsonFile(path.join(blogDir, `${pageID}.json`), {
                id: pageID,
                content: allMarkdown,
            });
        })
    );
}

async function main() {
    try {
        console.log("Đang lấy dữ liệu từ Notion...");

        const blogs = await getBlogs();

        // --- BƯỚC CLEAN DATA ---
        const cleanData = blogs.results.map((page) => {
            return {
                id: page.id,
                title: page.properties["Doc name"]?.title?.[0]?.plain_text || "",
                description: page.properties["Description"]?.rich_text?.[0]?.plain_text || "",
                categories: page.properties["Category"]?.multi_select || []
            };
        });

        // --- BƯỚC GHI FILE ---
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