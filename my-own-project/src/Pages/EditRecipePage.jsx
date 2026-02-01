import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, editRecipe } from "../services/recipeService";
import "../App.css";

const EditRecipePage = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [title, setTitle] = useState("");
    const [src, setSrc] = useState("");
    const [description, setDescription] = useState("");
    const [algorithm, setAlgorithm] = useState("");
    const [time, setTime] = useState("");

    const loadRecipe = async () => {
        try {
            const response = await getRecipe(id);
            setRecipe(response);
            setTitle(response.title);
            setSrc(response.src);
            setDescription(response.description);
            setAlgorithm(response.algorithm);
            setTime(response.time);
        } catch (e) {
            console.log("Eror fetching", e);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newRecipe = {
            id: Date.now().toString(),
            title,
            src: src,
            description,
            algorithm,
            time
        }

        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(newRecipe);
       

        editRecipe(newRecipe, id).then((response) => {
            console.log(response)
        });
    }

    useEffect(() => {
        loadRecipe();
    }, [])

    return (
        <div className="add-recipes-page page">
            <h1>Edit recipes</h1>
            <form className="add-recipe-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipe image</label>
                    <input type="text" className="form-input" value={src} onChange={(e) => setSrc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Recipe name</label>
                    <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Recipe description</label>
                    <input type="text" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Recipe algorithm</label>
                    <input type="text" className="form-input" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Recipe time</label>
                    <input type="text" className="form-input" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button className="btn" type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default EditRecipePage;