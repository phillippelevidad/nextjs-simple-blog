import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * @param {string} slug
 */
export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const { data, content } = matter(source);
  const body = marked(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    body,
  };
};

export const listSlugs = async () => {
  const extension = ".md";
  const files = readdir("content/posts");
  return (await files)
    .filter((file) => file.endsWith(extension))
    .map((file) => file.slice(0, -extension.length));
};

export const listPosts = async () => {
  const slugs = await listSlugs();
  const posts = [];
  for (const index in slugs) {
    const post = await getPost(slugs[index]);
    posts.push(post);
  }
  return posts;
}
