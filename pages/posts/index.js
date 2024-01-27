import { Fragment } from "react";
import AllPosts from "./all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostPage;
