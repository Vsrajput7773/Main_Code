import { useState } from "react";
import axios from "axios";
// import {_categoryapiurl}from '../ApiUrl.js'

function Addcategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post("http://localhost:3000/category/save", formData, config)
      .then((response) => {
        setCatName("");
        setOutput("Category Added Successfully...");
      });
  };

  return (
    <>
      <div classname="about">
        <div classname="container ">
          <div classname="row d_flex">
            <div classname="col-md-6">
              <div classname="titlepage">
                <h2>Add Category !!</h2>

                <font style={{ color: "blue" }}>{output}</font>
                <form onSubmit={handleSubmit}>
                  <div classname="form-group">
                    <label>Category Name:</label>
                    <input
                      type="text"
                      classname="form-control"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                    ></input>
                  </div>
                  <div classname="form-group">
                    <label>Category Icon:</label>
                    <input
                      type="file"
                      classname="form-control"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <button type="submit" classname="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcategory;
