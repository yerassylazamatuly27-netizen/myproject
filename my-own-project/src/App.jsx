import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import RecipeListPage from "./Pages/RecipeListPage.jsx"; 
import CreateRecipePage from "./Pages/CreateRecipePage.jsx"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recipes" element={<RecipeListPage />} /> 
      <Route path="/create-recipe" element={<CreateRecipePage />} />
    </Routes>
  );
}

export default App;
