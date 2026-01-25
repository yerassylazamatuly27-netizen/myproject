import { BASE_URL } from "./api";

export async function getRecipes() {
    const res = await fetch(BASE_URL + "/recipes");
    return res.json();
}

export async function createRecipe(recipe) {
    const res = await fetch(BASE_URL + "/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + localStorage.getItem("accessToken")
        },
        body: JSON.stringify(recipe)
    });
    return res.json();
}

export async function getRecipe(id) {
    const res = await fetch(BASE_URL + "/recipes/" + id);
    return res.json();
    
}

export async function editRecipe(recipe, id) {
    const res = await fetch(BASE_URL + "/recipes/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
    });

    return res.json();
}

export async function deleteRecipe(id) {
    const res = await fetch(BASE_URL + "/recipes/" + id, {
        method: "DELETE",
          headers: {
            "Content-Type": "application/json"
        },
    });

    return res.json();
}
