// components/Layout.js
// import React, { useEffect, useState } from "react";

// import getBlogPosts from "../components/api.js";

const Layout = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     let res = await getBlogPosts();
  //     setCategories(res);
  //   })();
  // }, []);
  return (
    <div>
      {/* {categories.map((item, i) => (
        <ul key={i}>
          <a>{item.name}</a>
        </ul>
      ))} */}
      {/* Navigation links */}
      <header>Header Section</header>

      {/* Page content */}
      <main>{}</main>

      {/* Footer */}
      <footer>Footer Section</footer>
    </div>
  );
};

export default Layout;
