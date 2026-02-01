
import { Trash, Pencil } from 'lucide-react';
import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete, onEdit }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.src}
        alt={recipe.title}
        className="recipe-image"
      />
      <Link to={"/recipes/" + recipe.id}><h3 className="recipe-title">{recipe.title}</h3></Link>

      <p className="recipe-description">{recipe.description}</p>
      <button className="btn" onClick={onDelete}>
        <Trash className="nav-icon" />
        </button>

      <Link to={"/recipes/" + recipe.id + "/edit"}>
      
        <button className="btn">
          <Pencil className="nav-icon" />
        </button>
      </Link>
    </div>
  );
}

export default RecipeCard;
