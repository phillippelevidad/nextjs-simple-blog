import { listPosts } from "lib/posts";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const posts = await listPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>Welcome to My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
