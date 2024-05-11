import React,{useState} from 'react';
import "./Header.css";
import proCart from "../../../images/ProCart.jpeg.jpg";
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const style={
    textDecoration:"none",
}

const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                {/* logo over here */}
                <div className="logo">
                    <NavLink to="/" style={{style}}>
                        <img src={proCart} alt="ProCart Logo" />
                    </NavLink>
                    
                </div>
                {/* menu links over here */}
                <div className={showMediaIcons?"menu-link mobile-menu-link":"menu-link"}>
                    <ul>
                        <li><NavLink to="/" style={{style,hover:'#ffa500'}}>Home</NavLink></li>
                        <li><NavLink to="/products" style={{style}}>Products</NavLink></li>
                        <li><NavLink to="/contact" style={{style}}>Contact</NavLink></li>
                        <li><NavLink to="/about" style={{style}}>About</NavLink></li>
                    </ul>
                </div>
                {/* images of search ,cart and profile */}
                <div className="extra-icons">
                    <ul className="extra-icons-desktop">
                        <li><NavLink to="/search"><SearchIcon fontSize='large'/></NavLink></li>
                        <li><NavLink to="/order"><ShoppingCartIcon fontSize='large'/></NavLink></li>
                        <li><NavLink to="/login"><AccountBoxIcon fontSize='large'/></NavLink></li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <MenuIcon />
                    </a>
                </div>


            </nav>
        </>
    )
}

export default Header





// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import proCart from "../../../images/ProCart.jpeg.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// // import searchIcon from "../../../images/searchIcon.svg";
// // import profileIcon from "../../../images/Profile.png";
// // import cartIcon from "../../../images/cartIcon.svg";

// // const options = {
// //     burgerColorHover= "#ffa500"
// //     logo=proCart
// //     logoWidth= "20vmax"
// //     navColor1= "white"
// //     logoHoverSize= "10px"
// //     logoHoverColor= "#ffa500"
// //     link1Text= "Home"
// //     link2Text= "Products"
// //     link3Text= "Contact"
// //     link4Text= "About"
// //     link1Url= "/"
// //     link2Url= "/products"
// //     link3Url= "/contact"
// //     link4Url= "/about"
// //     link1Size= "1.3vmax"
// //     link1Color= "rgba(35 35 350.8)"
// //     nav1justifyContent= "flex-end"
// //     nav2justifyContent= "flex-end"
// //     nav3justifyContent= "flex-start"
// //     nav4justifyContent= "flex-start"
// //     link1ColorHover= "#ffa500"
// //     link1Margin= "1vmax"
// //     profileIconUrl= "/login"
// //     // searchIcon=true
// //     // profileIcon=true
// //     // cartIcon=true
// //     ProfileIconElement=proCart
// //     // SearchIconElement=searchIcon
// //     // CartIconELement=cartIcon
// //     profileIconColor= "rgba(35 35 350.8)"
// //     searchIconColor= "rgba(35 35 350.8)"
// //     cartIconColor= "rgba(35 35 350.8)"
// //     profileIconColorHover= "#ffa500"
// //     searchIconColorHover= "#ffa500"
// //     cartIconColorHover= "#ffa500"
// //     cartIconMargin= "1vmax"
// // };

// const Header = () => {
//     console.log("ReactNavbar component:", ReactNavbar);
//     return (
//         // <></>


//     <ReactNavbar
//     burgerColorHover= "#ffa500"
//     logo={proCart}
//     logoWidth= "20vmax"
//     navColor1= "white"
//     logoHoverSize= "10px"
//     logoHoverColor= "#ffa500"
//     link1Text= "Home"
//     link2Text= "Products"
//     link3Text= "Contact"
//     link4Text= "About"
//     link1Url= "/"
//     link2Url= "/products"
//     link3Url= "/contact"
//     link4Url= "/about"
//     link1Size= "1.3vmax"
//     link1Color= "rgba(35 35 350.8)"
//     nav1justifyContent= "flex-end"
//     nav2justifyContent= "flex-end"
//     nav3justifyContent= "flex-start"
//     nav4justifyContent= "flex-start"
//     link1ColorHover= "#ffa500"
//     link1Margin= "1vmax"
//     profileIconUrl= "/login"
//     searchIcon={true}
//     // profileIcon={true}
//     // cartIcon={true}
//     // ProfileIconElement={proCart}
//     SearchIconElement={<FontAwesomeIcon icon={faSearch} />}
//     // CartIconELement=cartIcon
//     profileIconColor= "rgba(35 35 350.8)"
//     searchIconColor= "rgba(35 35 350.8)"
//     cartIconColor= "rgba(35 35 350.8)"
//     profileIconColorHover= "#ffa500"
//     searchIconColorHover= "#ffa500"
//     cartIconColorHover= "#ffa500"
//     cartIconMargin= "1vmax"
//     />


//     )
            
// };

// export default Header;
