import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";
import "../App.css"; 
import RecipeCard from "../components/RecipeCard";

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
            <RecipeCard key={recipe.id} recipe={recipe} />
         
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
