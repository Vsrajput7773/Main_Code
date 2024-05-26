import { Link, useNavigate } from 'react-router-dom';
import './About.css';
function About() {
   const navigate=useNavigate()
   return (
      <>
         {/* <!-- about --> */}
         <div class="about">
            <div class="container ">
               <div class="row d_flex">
                  <div class="col-md-5">
                     <div class="titlepage">
                        <h2>About Our Company</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                        <button class="read_more" onClick={()=>navigate('/ReadMore')}> Read More </button>
                     </div>
                  </div>
                  <div class="col-md-7">
                     <div class="about_img">
                        <figure><img src="assets/images/BOLERO/about.avif" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end about --> */}
      </>
   )
}

export default About;