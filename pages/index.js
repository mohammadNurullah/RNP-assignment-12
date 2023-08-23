// pages/index.js
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Home = () => {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    fetch("API_URL_FOR_HOME_PAGE_BLOGS")
      .then((response) => response.json())
      .then((data) => setBlogItems(data));
  }, []);

  return (
    <Layout>
      <section>
        {/* Home Page Content */}
        {/* Display blog items */}
        {blogItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
