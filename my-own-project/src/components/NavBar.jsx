import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search,  } from 'lucide-react'; 
import "./App.css";

const NavBar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const authorized= Boolean(localStorage.getItem("accessToken"));
    function logoutHandler() {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }
    return (
        <nav>
            <div className="nav-brand">
                <Link to="/">Eshop</Link>
            </div>
            <button className = "hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                { isMenuOpen ? <X size={24} /> : <Menu size={24} /> }
            </button>
            <div className="nav-links">
                <Link className="nav-link" to="/products">New</Link>
                <Link className="nav-link" to="/products">Men</Link>
                <Link className="nav-link" to="/products">Women</Link>
                <Link className="nav-link" to="/products">Sport</Link>
                {authorized && (<Link className="nav-link" to="/add-product">Add product</Link>)}
            </div>
            <div className="nav-buttons">
                <Link to="/cart"><ShoppingCart className="nav-icon" /></Link>
                <Link to="/favorites"><Heart className="nav-icon" /></Link>
                <Search className="nav-icon" />
                {authorized ? (
                    <Link to="/products" onClick={logoutHandler} ><button classname="nav-login">Logout</button></Link> 

                ) : (
                    <>
                    <Link to="/login">
                    <button className="nav-login" >Login</button>
                </Link>
                <Link to="/register">
                    <button className="nav-login" >Register</button>
                </Link>
                    </>
            
                )}
                

            </div>

            {isMenuOpen && (
                <div className="mobile-menu" onClick={() => setIsMenuOpen(false)}>
                    
                </div>
            )}


        </nav>
    )
}

export default NavBar;