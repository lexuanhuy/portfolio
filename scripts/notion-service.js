import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

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
