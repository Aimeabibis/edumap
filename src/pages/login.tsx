import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Connexion
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
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
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              Se connecter
            </button>

            <p className="text-sm text-center text-gray-500">
              Pas encore de compte ?{" "}
              <Link to="/register">
              <a className="text-green-800 hover:underline">
                S’inscrire
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
        {/* <div className="h-[50vh] block m-auto w-[50vw] bg-white mt-20 mb-20 rounded-sm shadow-lg">
          <input className="h-[30px] block " placeholder="Mail" type="text" />
          <input
            className="h-[30px] block"
            placeholder="Mot de passe"
            type="password"
          />

          <button>
            <Buttons
              label="Connexion"
              colorButton={"bg-green-600 hover:bg-green-700"}
            />
          </button>
        </div> */}
        {/* <div className="w-[50%] ">
            test
        </div> */}
      </div>
      <Footer />
    </>
  );
};
