function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-description">{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
    