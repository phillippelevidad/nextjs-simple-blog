import Head from "next/head";
import React from "react";
import { getPost, listSlugs } from "lib/posts";

export const getStaticPaths = async () => {
  const slugs = await listSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug }})),
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug }}) => {
  const post = await getPost(slug);
  return { props: { post } };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <p>{post.date}</p>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
    </>
  );
};

export default Post;
