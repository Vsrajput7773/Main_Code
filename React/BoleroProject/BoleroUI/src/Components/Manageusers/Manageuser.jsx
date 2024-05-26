import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Manageuser() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/fetch?role=user")
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        setUserDetails(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ManageUserStatus = (_id, s) => {
    if (s == "verify") {
      axios
        .patch("http://localhost:3000/user/update", { _id: _id, status: 1 })
        .then((result) => {
          window.location.reload();
        });
    } else if (s == "block") {
      axios
        .patch("http://localhost:3000/user/update", { _id: _id, status: 0 })
        .then((result) => {
          window.location.reload();
        });
    } else {
      axios.delete("http://localhost:3000/user/delete/"+_id).then((result) => {
        window.location.reload();
      });
    }
  };

  return (
    <>
      <div className="about mt-0 mx-0">
        <div className="container ">
          <div className="row d_flex">
            <div className="col-12">
              <div className="titlepage">
                {/* <center> */}
                <h1>Manage User Details</h1>
                <table className="table bg-warning">
                  <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  {userDetails.map((user) => (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.mobile}</td>
                      <td>{user.address}</td>
                      <td>{user.city}</td>
                      <td>{user.gender}</td>
                      <td>{user.info}</td>
                      <td>
                        {user.status == 0 && (
                          <Link
                            style={{ color: "green" }}
                            onClick={() => {
                              ManageUserStatus(user._id, "verify");
                            }}
                          >
                            Verify User
                          </Link>
                        )}
                        {user.status == 1 && (
                          <Link
                            style={{ color: "orange" }}
                            onClick={() => {
                              ManageUserStatus(user._id, "block");
                            }}
                          >
                            Block User
                          </Link>
                        )}
                      </td>
                      <td>
                        <Link
                          style={{ color: "red" }}
                          onClick={() => {
                            ManageUserStatus(user._id, "delete");
                          }}
                        >
                          Delete User
                        </Link>
                      </td>
                    </tr>
                  ))}
                </table>
                {/* </center> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manageuser;
