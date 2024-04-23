// import React from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// // export default function Navbar() {
    
//     const Navbar = () => {

//     return (
//     <div className='navbar'>
//         <div className="nav-logo">
//             <img src={logo} alt="" />
//             <p>SHOPPER</p>
//         </div>
//         <ul className='nav-menu'>
//             <li onclick={()=>{setMenu("Shops")}} >Shop{menu=="shop"?<h/>:<></>}</li>
//             <li onclick={()=>{setMenu("Mens")}} >Men{menu=="Mens"?<h/>:<></>}</li>
//             <li onclick={()=>{setMenu("womens")}} >Women{menu=="Womens"?<h/>:<></>}</li>
//             <li onclick={()=>{setMenu("Kids")}} >Kids{menu=="Kids"?<h/>:<></>}</li>
//         </ul>
//         <div className="nav-login-cart">
//             <button>Login</button>
//             <img src={cart_icon} alt=""/>
//             <div className="nav-cart-count">0</div>
//         </div>
//     </div>
//     )

// }
import React, { useState } from 'react'; // Import useState from react

import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
// const Navbar = () => {}
export default function Navbar() {
    const [menu, setMenu] = useState("Shops"); // Define menu state variable

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Shops") }}><a href='/'>Shop</a>{menu === "Shops" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Mens") }}><a href='/mens'>Men</a>{menu === "Mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Womens") }}><a href='/womens'>Women</a>{menu === "Womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Kids") }}><a href='/kids'>Kids</a>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <a href='/Login'><button>Login</button></a>
                < a href='/cart'><img src={cart_icon} alt="" /></a>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}