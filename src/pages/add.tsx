import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactMap } from "../components/Map";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

export const Add = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mt-30 mb-30">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Enregistrer une école en besoin
          </h2>
          {/* <button className="mb-4">
            <Link to="/login">
              <Buttons
                label="Connexion"
                colorButton={"bg-green-900 hover:bg-green-700"}
              />
            </Link>
          </button> */}
          
          <form className="space-y-5">
            <div className=" ">
              <label className="font-bold">Informations de l'école</label>
              <div className="flex flex-wrap pt-4">
                <div className="w-1/2 pr-1  ">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom & Prénom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom de l'école
                  </label>
                  <input
                    type="text"
                    name="ecole"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block text-sm font-medium text-gray-700 ">
                    Images d'écoles (JPG, PNG)
                  </label>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    className="mt-1 w-full px-4 py-2 border rounded-md "
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2 pr-1">
                <label className="block text-sm font-medium text-gray-700">
                  Région
                </label>
                <select
                  name="niveau"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                >
                  <option value="">-- Sélectionner --</option>
                  <option>Nord</option>
                  <option>Sud</option>
                  <option>Centre</option>
                </select>
              </div>
              <div className="w-1/2 pl-1">
                <label className="block text-sm font-medium text-gray-700">
                  Commune
                </label>
                <input
                  type="text"
                  name="ecole"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
            </div>
            <div>
              <label>Localisation</label>
              <div>
                <ReactMap styleMap={{ height: 200 }} />
              </div>
              <div className="flex flex-wrap mt-2">
                <div className="w-1/2 pr-1 ">
                  <label className="block text-sm font-medium text-gray-700">
                    Latitude
                  </label>
                  <input
                    type="text"
                    name="latitude"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Longitude
                  </label>
                  <input
                    type="text"
                    name="longitude"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label className="font-bold"> Informations détaillées</label>
              <div className="flex flex-wrap mt-2">
                <div className="w-1/2 pr-1 ">
                  <label className="block text-sm font-medium text-gray-700">
                    Effectif des apprenants
                  </label>
                  <input
                    type="number"
                    name="effectif"
                    min="1"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre de salles de classe
                  </label>
                  <input
                    type="number"
                    name="effectif"
                    min="1"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label> Besoins principaux</label>
              <div>
                <div className="flex ">
                  <input type="checkbox" />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Matériel scolaire
                  </label>
                </div>
                <div className="flex ">
                  <input type="checkbox" />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Rénovation des salles
                  </label>
                </div>
                <div className="flex ">
                  <input type="checkbox" />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Besoin d'enseignants
                  </label>
                </div>
                <div className="flex ">
                  <input type="checkbox" />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Installations sanitaires
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description du besoin
              </label>
              <textarea
                name="besoin"
                rows={4}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
