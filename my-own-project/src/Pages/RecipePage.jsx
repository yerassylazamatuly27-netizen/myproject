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
            <h2 className="recipe-title">{recipe.title}</h2>
            <img
                src={recipe.src}
                alt={recipe.title}
                className= "small-image"
                
            />
            
            <p className="recipe-description"> {recipe.description}</p>
            <p className="recipe-algorithm">Алгоритм приготовления: {recipe.algorithm}</p>
            <p className="recipe-time">Время приготовления: {recipe.time}</p>
        </div>
    )
}

export default RecipePage;