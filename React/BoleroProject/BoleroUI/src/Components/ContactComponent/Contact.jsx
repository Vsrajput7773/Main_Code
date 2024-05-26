import './Contact.css';

function Contact() {
   return (
      <>
         {/* <!--  contact --> */}
         <div className="contact">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="ru_bg">
                        <div className="row">
                           <div className="col-md-3">
                              <a href="index.html"> <img className="logo_fooetr" src="assets/images/BOLERO/LOGO.PNG" alt="#" /></a>
                           </div>
                           <div className="col-md-9">
                              <ul className="lacation">
                                 <li><i className="fa fa-map-marker" aria-hidden="true"></i> Gb road 123 london Uk </li>
                                 <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> G(+01) 123456789012</li>
                                 <li><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row d_flex">
                  <div className="col-md-6">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>Contact Us</h2>
                        </div>
                     </div>
                     <form id="request" className="main_form">
                        <div className="row">
                           <div className="col-md-12 ">
                              <input className="contactus" placeholder="Name" type="type" name="Name" />
                           </div>
                           <div className="col-md-12">
                              <input className="contactus" placeholder="Phone number" type="type" name="Phone number" />
                           </div>
                           <div className="col-md-12">
                              <input className="contactus" placeholder="Email" type="type" name="Email" />
                           </div>
                           <div className="col-md-12">
                              <textarea className="textarea" placeholder="Message" type="type" Message="Name"></textarea>
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <button className="send_btn">Send</button>
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <ul className="social_icon">
                                 <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                 <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                 <li><a href="Javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                 <li><a href="Javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6">
                     <div className="map_main">
                        <div className="map-responsive">
                           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="378" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end contact --> */}
      </>
   )
}

export default Contact;