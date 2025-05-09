import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copassword, setCoPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (password !== copassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur lors de l'inscription");
        return;
      }

      alert("Inscription réussie !");
      navigate("/login"); // Redirige vers la page de login
    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur serveur");
    }
  };
  
  return (
    <>
    <Navbar/>
      <div className=" min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-20">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Créer un compte
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={fullName}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmer mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={copassword}
                onChange={(e) => setCoPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>
            

            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              S’inscrire
            </button>

            <p className="text-sm text-center text-gray-500">
              Déjà un compte ?{" "}
              <Link to="/login">
              <a  className="text-green-800 hover:underline">
                Se connecter
              </a>          
              </Link>
              
            </p>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Ou continue avec
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
              <i className="fab fa-github"></i> GitHub
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
