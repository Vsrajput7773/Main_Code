import './Blog.css';

function Blog() {
   return (
      <>
         {/* <!-- blog --> */}
         <div className="blog">
            <div className="container ">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>FROM THE BLOG</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12">
                     <div className="blog_bg margin_bottom30">
                        <div className="row d_flex">
                           <div className="col-md-6">
                              <div className="blog_img">
                                 <figure><img src="/assets/images/BOLERO/BLOG.avif" alt="#" /></figure>
                                 <span>06<br />Feb</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="marriage_text">
                                 <span>Post by : Bolero </span>
                                 <h3>Tempor incididunt ut labore et dolore</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                 <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className="blog_bg">
                        <div className="row d_flex">
                           <div className="col-md-6">
                              <div className="blog_img">
                                 <figure><img src="/assets/images/BOLERO/BAGROUND.avif" alt="#" /></figure>
                                 <span>06<br />Feb</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="marriage_text">
                                 <span>Post by : Bolero Pickup </span>
                                 <h3>Tempor incididunt ut labore et dolore</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                 <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end blog --> */}
      </>
   )
}

export default Blog;