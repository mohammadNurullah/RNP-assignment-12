// pages/single-blog/[slug].js
import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const SingleBlog = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch blog details using slug
  // Fetch the data using the slug parameter and display the blog content

  return (
    <Layout>
      <section>
        {/* Single Blog Page Content */}
        <h2>Blog Title</h2>
        <p>Blog Content</p>
      </section>
    </Layout>
  );
};

export default SingleBlog;
pages / [slug].js;
