import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Showarticles() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    axios
      .get("http://localhost:9011/showArticles")
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        // console.log("Error fetching articles:", error);
        console.log(error.message);

        setArticles("Server Down");
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  let renderedArticles;
  try {
    renderedArticles = articles.map((article) => (
      <tr key={article.id}>
        <td style={{ border: "1px solid black" }} className="text-center">
          {article.id}
        </td>
        <td style={{ border: "1px solid black" }} className="text-center">
          {article.name}
        </td>
        <td style={{ border: "1px solid black" }} className="text-center">
          {article.category}
        </td>
        <td style={{ border: "1px solid black" }} className="text-center">
          {article.date}
        </td>
        <td style={{ border: "1px solid black" }} className="text-center">
          {article.creatorName}
        </td>
      </tr>
    ));
  } catch (e) {
    console.log(e);

    renderedArticles = (
      <tr>
        <td colSpan="5" style={{ textAlign: "center" }}>
          No articles found
        </td>
      </tr>
    );
  }

  return (
    <div className="container d-flex justify-content-center">
      <h1 className="">All Articles</h1>
      <div className="row">
        {/* Table Section */}
        <div className="col-xl-6 mt-5 mb-5 text-center">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="p-5" style={{ border: "1px solid black" }}>ID</th>
                <th className="p-5" style={{ border: "1px solid black" }}>Name</th>
                <th className="p-5" style={{ border: "1px solid black" }}>Category</th>
                <th className="p-5" style={{ border: "1px solid black" }}>Date</th>
                <th className="p-5" style={{ border: "1px solid black" }}>Creator Name</th>
              </tr>
            </thead>
            <tbody>
              {articles.length > 0 ? (
                renderedArticles
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No articles available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
