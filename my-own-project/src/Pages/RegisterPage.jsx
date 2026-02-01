import { useState } from "react";

import { registerUser } from "../services/userService";
import "../App.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      //validation if fields are empty
      alert("Registration successful");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth">
     <div> <h2>Register</h2> </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
