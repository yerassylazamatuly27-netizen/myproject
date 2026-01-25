import React, { useState } from 'react';
import { createRecipe } from "../services/recipeService";


const AddRecipe = () => {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        const newRecipe = {
            id: Date.now().toString(),
            title,
            src: img,
            description
        }

        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

       createRecipe(newRecipe).then((response) => {
        console.log(response)
       });
    }

    return (
        <div className="add-recipes-page page">
            <h1>Add recipes</h1>
            <form className="add-recipe-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipe image</label>
                    <input type="text" className="form-input" value={img} onChange={(e) => setImg(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Recipe name</label>
                    <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label>Recipe description</label>
                    <input type="text" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className="add-recipe-button" type="submit">Add recipe</button>
            </form>
        </div>
    )
}

export default AddRecipe;