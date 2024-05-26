import { useState } from "react";
import axios from "axios";

function Register() {

  const [output,setOutput] =useState();
  const [name,setName] =useState();
  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  const [gender,setGender] =useState();
  const [city,setCity] =useState();
  const [address,setAddress] =useState();
  const [mobile,setMobile]=useState();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    let userDetails ={
        name:name,
        email:email,
        password:password ,
        mobile:mobile ,
        gender:gender,
        city:city,
        address:address,

    };

    axios.post('http://localhost:3000/user/save',userDetails)
    .then((response)=>{
        console.log(response);
        setOutput(response.data.result)
        setAddress('')
        setCity('')
        setEmail('')
        setGender('')
        setMobile('')
        setName('')
        setPassword('')
        
    })
  }
  
  
  
    return (
    <>
      <div class="plane">
        <div class="container  ">
          <div class="row">
            <div class="col-sm-6">
              <div class="titlepage">
                <h2>Register</h2>
                <font style={{ color: "green" }}>{output}</font>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <lable for="Name">Name</lable>
                    <input
                      type="text"
                      class="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
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
                    <lable for="Password">Password</lable>
                    <input
                      type="pwd"
                      class="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div class="form-group">
                    <lable for="mobile">Mobile</lable>
                    <input
                      type="number"
                      class="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    ></input>
                  </div>
                  <div class="form-group">
                    <lable for="address">Address</lable>
                    <input
                      type="text-area"
                      class="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  <div class="form-group">
                    <lable for="city">City</lable>
                    <select
                      class="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option>Select City</option>
                      <option>Indore</option>
                      <option>Dewas</option>
                      <option>Ujjain</option>
                      <option>Bhopal</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <lable for="gender">Gender :</lable>
                    Male{" "}
                    <input
                      type="radio"
                      value="male"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                    ></input>
                    &nbsp;&nbsp; Female{" "}
                    <input
                      type="radio"
                      value="female"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                    ></input>
                  </div>
                  <button type="submit" class="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="titlepage d-flax">
                <div>
                  <img src="/public/assets/images/BOLERO/LOGO.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
