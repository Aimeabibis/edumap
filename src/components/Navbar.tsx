import React, { useState } from "react";
// import logo from './../../public/logo_edu.png';
import Buttons from "./Buttons";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    // Redirection vers la page de connexion
    navigate("/login");
  };
  return (
    <div className="fixed z-[9] w-full h-20 flex justify-between items-center bg-[#f1f1f1] text-[#1a1a1a] px-20 shadow-md ">
      <img
        src="./../../public/logo.png"
        alt=""
        className="h-17 bg-white rounded-full"
      />
      <ul className="mqmin850 hidden justify-between font-semibold items-center gap-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white bg-green-800 px-4 py-2 rounded" : ""
            }
            to="/home"
          >
            <a>Accueil</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white bg-green-800 px-4 py-2 rounded" : ""
            }
            to="/map"
          >
            <a>Carte</a>
          </NavLink>
        </li>
        {localStorage.getItem("user") && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white bg-green-800 px-4 py-2 rounded" : ""
              }
              to="/add"
            >
              <a>Ajouter</a>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white bg-green-800 px-4 py-2 rounded" : ""
            }
            to="/about"
          >
            <a>À propos</a>
          </NavLink>
        </li>
      </ul>
      {!localStorage.getItem("user") && (
        <button className="mqmin850 hidden gap-10">
          <Link to="/login">
            <Buttons
              
              label="Connexion"
              colorButton={"bg-green-900 hover:bg-green-700"}
            />
          </Link>
        </button>
      )}
      {localStorage.getItem("user") && (
        <div onClick={() => setIsLoggedIn(true)} className="flex items-center gap-2 font-semibold text-green-900 cursor-pointer">
          <User className="text-green-900" />
          {JSON.parse(localStorage.getItem("user") as string)?.email}
          {isLoggedIn && <div className="fixed right-35 top-20 bg-white w-[20vh] shadow-sm rounded-sm px-4 py-3 font-bold cursor-pointer transition-all duration-700 ease-in-out">
            <div onClick={handleLogout}>Déconnexion</div>
          </div>}
        </div>
      )}
      <div className="lg:hidden " onClick={() => setMenuMobile(!menuMobile)}>
        <Menu />
      </div>
      {menuMobile && (
        <div className="absolute right-5 top-[80px] bg-white w-[20vh] shadow-sm rounded-sm px-4 py-3 font-bold cursor-pointer transition-all duration-700 ease-in-out">
          <ul className="">
            <li className="mb-1">
              <Link to="/home">
                <a>Accueil</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/map">
                <a>Carte</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/add">
                <a>Ajouter</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about">
                <a>À propos</a>
              </Link>
            </li>
          </ul>
          <button className="mt-2">
            <Link to="/login">
              <Buttons
                label="Connexion"
                colorButton={"bg-green-900 hover:bg-green-700"}
              />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
