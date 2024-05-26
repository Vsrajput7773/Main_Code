import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import Authentication from './AuthenticationComponent/Authentication.js';

function Header() {
  const [HeaderContent, setHeaderContent] = useState();
  // const [trackemail,setTrackEmail]= useState(localStorage.getItem("email"));

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") == "admin") {
        setHeaderContent(
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        {/* <a href="index.html">BOLERO</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to={"/admin"}>
                            Admin Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/manageaUsers"}>
                            Manage Users
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/addCategory"}>
                            Add Category
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/addSubCategory"}>
                            Add Sub Category
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/showProduct"}>
                            Show Product
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/logout"}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="search">
                      <li>
                        <a href="Javascript:void(0)">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <p className="contentleft">Welcome:{trackemail}</p> */}
              </div>
            </div>
          </div>
        );
      } else if (localStorage.getItem("role") == "user") {
        setHeaderContent(
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        {/* <a href="index.html">BOLERO</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to={"/user"}>
                            User Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/searchCar">
                            Search Car
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/addCar">
                            Add Car
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/editProfile">
                            Edit Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/logout">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="search">
                      <li>
                        <a href="Javascript:void(0)">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <p className="contentleft">Welcome:{trackemail}</p> */}
              </div>
            </div>
          </div>
        );
      } else {
        setHeaderContent(
          <>
            {/* <!-- header --> */}
            <header className="full_bg">
              {/* <!-- header inner --> */}
              <div className="header">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                      <div className="full">
                        <div className="center-desk">
                          <div className="logo">
                            <a href="index.html">BOLERO</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                      <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarsExample04"
                          aria-controls="navbarsExample04"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarsExample04"
                        >
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                              <Link className="nav-link" to='/'>
                                Home
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="About">
                                About
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="Service">
                                Service
                              </Link>
                            </li>
                            {/* <li className="nav-item">
                              <Link className="nav-link" to="Content">
                                Content
                              </Link>
                            </li> */}
                            <li className="nav-item">
                              <Link className="nav-link" to="Blog">
                                {" "}
                                Blog
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="Contact">
                                Contact
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="Register">
                                Register
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="Login">
                                Login
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <ul className="search">
                          <li>
                            <a href="Javascript:void(0)">
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end header inner -->
         <!-- end header -->
         <!-- banner --> */}
              <section className="banner_main">
                <div
                  id="myCarousel"
                  className="carousel slide banner"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption  banner_po">
                          <div className="row">
                            <div className="col-lg-8 col-md-9 ">
                              <div className="build_box">
                                <h1>
                                  BOLERO{" "}
                                  <span className="orang">YOUR DREAM CAR</span>
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut laboreLorem ipsum dolor sit
                                  amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore
                                </p>
                                <a
                                  className="read_more quote_btn"
                                  href="Javascript:void(0)"
                                  role="button"
                                >
                                  Get A Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption banner_po">
                          <div className="row">
                            <div className="col-lg-8 col-md-9 ">
                              <div className="build_box">
                                <h1>
                                  BOLERO{" "}
                                  <span className="orang">THE DREAM CAR</span>
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut laboreLorem ipsum dolor sit
                                  amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore
                                </p>
                                <a
                                  className="read_more quote_btn"
                                  href="Javascript:void(0)"
                                  role="button"
                                >
                                  Get A Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption banner_po">
                          <div className="row">
                            <div className="col-lg-8 col-md-9 ">
                              <div className="build_box">
                                <h1>
                                  BOLERO{" "}
                                  <span className="orang">THE DREAM CAR</span>
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut laboreLorem ipsum dolor sit
                                  amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore
                                </p>
                                <a
                                  className="read_more quote_btn"
                                  href="Javascript:void(0)"
                                  role="button"
                                >
                                  Get A Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </section>
              {/* <!-- end banner --> */}
            </header>

            {/* <div className="loader_bg">
         {/* <!-- loader  --> */}

            {/* <div className="loader"><img src="assets/images/loading.gif" alt="#" /></div> */}

            {/* </div> */}

            {/* <!-- play --> */}
            {/* // <div className="section">
         //    <div className="container">
         //       <div className="row">
         //          <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
         //             <div className="play_btn text_align_center">
         //                <img src="assets/images/play.png" alt="#" />
         //             </div>
         //          </div>
         //       </div>
         //    </div> */}
            {/* <!-- end play --> */}

            {/* </div> */}
          </>
        );
      }
    });
  });

  return (
    <>
      <header className="full_bg">
        {/* <Authentication/> */}
        {HeaderContent}
      </header>
    </>
  );
}

export default Header;
