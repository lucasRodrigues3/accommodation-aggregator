import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== password2) return setError("Passwords must match");

    try {
      await axios.post("http://127.0.0.1:8000/api/auth/register/", {
        email,
        password,
      });
      window.location.href = "/login";
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full mb-4"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
