import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search,  } from 'lucide-react'; 
import "../App.css";

const NavBar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);


    

    const authorized= Boolean(localStorage.getItem("accessToken"));
    function logoutHandler() {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }
    return (
        <nav>
           <div className="navbar">
                      <h1 className="title">Cookify</h1>
            
          
                      <div className="buttons">
                          
          
                          <Link to="/recipes" className="btn">
                              All Recipes
                          </Link>
          
                          {authorized && (
                              <Link to="/create-recipe" className="btn">
                                  Add recipe
                              </Link>
                          )}
          
                          {authorized ? (
                              <Link to="/products" className="btn" onClick={logoutHandler} > Logout</Link>
          
                          ) : (
                              <>
                                  <Link to="/login" className="btn">Login </Link>
                                  <Link to="/register" className="btn">Register</Link>
                              </>
          
                          )}
                      </div>
                  </div>
        </nav>
    )
}

export default NavBar;