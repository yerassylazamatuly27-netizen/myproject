import { Link } from "react-router-dom";
import "../App.css";

const authorized = Boolean(localStorage.getItem("accessToken"));

function logoutHandler() {
    localStorage.removeItem("accessToken");
    window.location.reload();
}

function HomePage() {
    return (
        <div className="home">
            <h1 className="title">Cookify</h1>
            <p className="subtitle">Лучшие рецепты в одном месте</p>

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
    );
}

export default HomePage;
