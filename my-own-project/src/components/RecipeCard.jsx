
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
       <img
              src={recipe.src}
              alt={recipe.title}
              className="recipe-image"
            />
       <Link to={"/recipes/" + recipe.id}><h3 className="recipe-title">{recipe.title}</h3></Link>
      <p className="recipe-description">{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
    