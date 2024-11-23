import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Updatearticle() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [creatorName, setCreatorName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id") || "");
    setName(localStorage.getItem("name" || ""));
    setCategory(localStorage.getItem("category" || ""));
    setDate(localStorage.getItem("date" || ""));
    setCreatorName(localStorage.getItem("creatorName" || ""));
  }, []);

  const updateArticle = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9011/updateArticles/${id}`, {
        name: name,
        category: category,
        date: date,
        creatorName: creatorName,
      })
      .then((response) => {
        console.log(response.data);
        alert("Article updated successfully!");
        navigate("/showArticles");
      })
      .catch((error) => {
        console.error("Error updating article:", error);
        alert("Failed to update article. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1>Update Article</h1>
      <div className="row">
        <form onSubmit={updateArticle}>
          <div className="mb-3">
            <input
              id="articleId"
              className="form-control"
              placeholder="Enter Article ID"
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              id="articleName"
              className="form-control"
              placeholder="Enter Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              id="articleName"
              className="form-control"
              placeholder="Enter Category Name"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              id="articleName"
              className="form-control"
              placeholder="Enter Date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              id="articleName"
              className="form-control"
              placeholder="Enter Creator Name"
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
