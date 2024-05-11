import './App.css';
// import { useEffect } from "react"
import Header from "./component/layout/Header/Header.js";
import { useSelector } from "react-redux";
import Home from "./component/Home/Home.js"
import Footer from "./component/layout/Footer/Footer.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store"
import {loadUser} from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import Profile from "./component/User/Profile.js"
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import Contact from "./component/Contact/Contact.js";
import About from "./component/layout/About/About.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
  }));

  // const{isAuthenticated,user}=useSelector((state)=>
  // )
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    });
    store.dispatch(loadUser());
  },[])
  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user}/>}
      <Routes>
      {/* <Switch> */}
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/product/:id" element={<ProductDetails />}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:keyword" element={<Products/>}/>
        <Route exact path="/search" element={<Search/>}/>
        {/* <Route exact path="/account" element={<ProtectedRoute/>}> */}
        <Route exact path="/account" element={<Profile/>}/>
        {/* </Route> */}
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/about" element={<About/>} />



        <Route exact path="/login" element={<LoginSignUp/>}/>

        {/* </Switch> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
