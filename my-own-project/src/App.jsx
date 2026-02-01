import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import RecipeListPage from "./Pages/RecipeListPage.jsx";
import CreateRecipePage from "./Pages/CreateRecipePage.jsx";
import RecipePage from "./Pages/RecipePage.jsx";
import EditRecipePage from "./Pages/EditRecipePage.jsx";
import NavBar from "./components/NavBar.jsx";


const authorized = Boolean(localStorage.getItem("accessToken"));
 function logoutHandler() {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }

function App() {
  return (
    <>

  <NavBar />
    
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recipes" element={<RecipeListPage />} />
      {authorized && (<Route path="/create-recipe" element={<CreateRecipePage />} />)}
      <Route path="/recipes/:id/edit" element={<EditRecipePage />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
    </Routes>
    </>
  );
}

export default App;
