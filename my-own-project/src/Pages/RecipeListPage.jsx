import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";
import "../App.css"; 

function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes()
      .then(data => setRecipes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loading">Loading recipes...</p>;
  }

  return (
    <div className="recipe-list">
      <h1 className="title">All Recipes</h1>

      <div className="recipe-grid">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
