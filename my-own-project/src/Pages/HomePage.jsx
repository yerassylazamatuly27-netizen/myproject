import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {
  return (
    <div className="home">
      <h1 className="title">Recipe App</h1>
      <p className="subtitle">Лучшие рецепты в одном месте</p>

      <div className="buttons">
        <Link to="/login" className="btn">
          Login
        </Link>

        <Link to="/register" className="btn">
          Register
        </Link>

        <Link to="/recipes" className="btn">
          All Recipes
        </Link>

        <Link to="/create-recipe" className="btn">
          Add recipe
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
