import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/HeaderComponents/header.jsx';
import About from './Components/AboutComponent/AboutComponent/About.jsx';
import Service from './Components/ServiecComponent/service.jsx'
import Content from './Components/ContentConponet/Content.jsx';
import Blog from './Components/BlogCompnent/Blog.jsx';
import Contact from './Components/ContactComponent/Contact.jsx';
import Register from './Components/RegisterComponent/Register.jsx'
import Login from './Components/LoginComponent/Login.jsx'
import Logout from './Components/LogoutComponent/logout.jsx'
import AdminHome from './Components/AdminComponent/Admin.jsx'
import UserHome from './Components/UserComponent/user.jsx'
import Footer from './Components/FooterComponent/Footer.jsx';
import AddCategory from './Components/AddcategoryComponent/addcategory.jsx';
import Readmore from './Components/ReadMore/Readmore.jsx';
import Manageuser from './Components/Manageusers/Manageuser.jsx';
import AddSubCategory from './Components/AddSubCategory/AddSubCategory.jsx';
function App() {
  return (
    <div className="main-layout">
      <Header />
      <Routes>

        <Route path='/' element={<Content/>}></Route>
        <Route path='/ReadMore' element={<Readmore />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Service' element={<Service />}></Route>
        <Route path='/Content' element={<Content />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/user' element={<UserHome/>}></Route>
        <Route path='/admin' element={<AdminHome/>}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
        <Route path='/addcategory' element={<AddCategory/>}></Route>
        <Route path='/manageaUsers' element={<Manageuser/>}></Route>
        <Route path='/addsubcategory' element={<AddSubCategory/>}></Route>

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
