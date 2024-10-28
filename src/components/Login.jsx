import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (authenticateUser(username, password)) {
      navigate("/");
    } else {
      setError("Invalid username or password 😔");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Welcome Back ✨
        </h1>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full mt-4 hover:bg-gray-800 transition shadow-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
