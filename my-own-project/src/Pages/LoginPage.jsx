import { useState } from "react";

import { loginUser } from "../services/userService"; 
import "../App.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("accessToken", data.accessToken);
      alert("LOGIN SUCCESSFUL");
      window.location.replace("/");
    } catch {
      alert("LOGIN FAILED");
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
