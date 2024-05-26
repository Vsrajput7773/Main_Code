// import './Login.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == undefined) {
      setOutput("* Email Is Required");
    } else if (password == undefined) {
      setOutput("* password Is Required");
    } else {
      let userDetails = {
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:3000/user/login", userDetails)
        .then((response) => {
          if (response.data.token != "error") {
            const responseData = response.data.userDetails;
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("_id", responseData._id);
            localStorage.setItem("name", responseData.name);
            localStorage.setItem("email", responseData, email);
            localStorage.setItem("password", responseData.password);
            localStorage.setItem("mobile", responseData.mobile);
            localStorage.setItem("address", responseData.address);
            localStorage.setItem("city", responseData.city);
            localStorage.setItem("gender", responseData.gender);
            localStorage.setItem("role", responseData.role);
            localStorage.setItem("info", responseData.info);
            responseData.role == "admin"
              ? navigate("/admin")
              : navigate("/user");
          } else {
            setOutput("Invalid Email or Password");
            setEmail("");
            password("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div class="plane">
        <div class="container  ">
          <div class="row">
            <div class="col-sm-6">
              <div class="titlepage">
                <h2>Login</h2>
                <font style={{ color: "blue" }}>{output}</font>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <lable for="email">Email Address</lable>
                    <input
                      type="email"
                      class="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div class="form-group">
                    <lable for="password">Password</lable>
                    <input
                      type="pwd"
                      class="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <button type="submit" class="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="titlepage">
                <img src="./public/assets/images/BOLERO/LOGO.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
