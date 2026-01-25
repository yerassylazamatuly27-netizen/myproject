import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/recipeService";
import "../App.css";

const RecipePage = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const loadRecipe = async () => {
        try {
            const response = await getRecipe(id);
            setRecipe(response);
        } catch (e) {
            console.log("Eror fetching", e);
        }
    }

    useEffect(() => {
        loadRecipe();
    }, [])

    return (
        <div className="recipe-card">
            <img
                src={recipe.src}
                alt={recipe.title}
                className="recipe-image"
            />
            <h3 className="recipe-title">{recipe.title}</h3>
            <p className="recipe-description">{recipe.description}</p>
        </div>
    )
}

export default RecipePage;