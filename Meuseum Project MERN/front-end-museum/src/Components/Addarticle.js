import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Addarticle() {
  const [articles, setArticles] = useState([]);

  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();
  var x5 = useRef();

  var addArticle = (e) => {
    e.preventDefault();
    var id = x1.current.value;
    var name = x2.current.value;
    var category = x3.current.value;
    var date = x4.current.value;
    var creatorName = x5.current.value;

    console.log(id, name);

    axios
      .post("http://localhost:9011/addArticles", {
        id: id,
        name: name,
        category: category,
        date: date,
        creatorName: creatorName,
      })
      .then((response) => {
        alert("Article added successfully!");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <div className="container">
      <h1>Add Articles</h1>
      <div className="row">
        {/* Form Section */}
        <div className="col-xl-6 border p-5">
          <form onSubmit={addArticle}>
            <div className="mb-3">
              <input
                placeholder="Enter Article ID"
                type="number"
                ref={x1}
                required
              />
            </div>
            <div className="mb-3">
              <input placeholder="Name" type="text" ref={x2} required />
            </div>
            <div className="mb-3">
              <input placeholder="Category" type="text" ref={x3} required />
            </div>
            <div className="mb-3">
              <input placeholder="Date" type="date" ref={x4} required />
            </div>
            <div className="mb-3">
              <input placeholder="Creator Name" type="text" ref={x5} required />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>

        {/* Table Section */}
        <div className="col-xl-6 border">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black" }}>ID</th>
                <th style={{ border: "1px solid black" }}>Name</th>
                <th style={{ border: "1px solid black" }}>Category</th>
                <th style={{ border: "1px solid black" }}>Date</th>
                <th style={{ border: "1px solid black" }}>Creator Name</th>
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
