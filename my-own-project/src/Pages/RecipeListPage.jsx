import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe, editRecipe } from "../services/recipeService";
import "../App.css";
import RecipeCard from "../components/RecipeCard";
import SearchForm from "../components/SearchForm.jsx";

function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes()
      .then(data => setRecipes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const [searchValue, setSearchValue] = useState("");


  function onSearchHandler(searchValue) {
    setSearchValue(searchValue);
  }
  const filteredRecipes = recipes.filter((recipe) => {

    const search = searchValue.trim().toLowerCase();
    const matchesSearch = search === "" || recipe.title.toLowerCase().includes(search);

    if (!matchesSearch) return false;

    return true;
  })

  if (loading) {
    return <p className="loading">Loading recipes...</p>;
  }

  async function deleteRecipeHandler(id) {
    await deleteRecipe(id);
    const response = await getRecipes();
    setRecipes(response);
  }

  async function editRecipeHandler(id) {
    await editRecipe(id);
    const response = await getRecipes();
    setRecipes(response);
  }

  return (
    <div className="recipe-list">
     <div className="recipe-block" >
       <h1 className="title">All Recipes</h1>
      <SearchForm onSearchHandler={onSearchHandler} />

      <div className="recipe-grid">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={() => deleteRecipeHandler(recipe.id)} 
            onEdit={() => editRecipeHandler(recipe.id)}/>
        ))}
      </div>
     </div>
    </div>
  );
}

export default RecipeListPage;
