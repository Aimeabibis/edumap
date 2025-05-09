import React from "react";
import { Search, Plus, Star } from "lucide-react";
import Footer from "./Footer";
import { ReactMap } from "./Map";

const Accueil = () => {
  return (
    <div className=" ">
      <section>
        <div className="relative h-[80vh] w-full">
          <img
            src="./../../public/Ecole.jpg"
            alt="Bannière"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Sauvons l’éducation ensemble au Bénin
            </h1>
            <p className="md:text-2xl text-sm">
              Localisez, Ajoutez, Soutenez - Chaque école compte
            </p>
          </div>
        </div>
      </section>

      {/* carte */}
      <div className="py-20 flex flex-col gap-10">
        <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-green-800">
          Carte des Ecoles en Besoin
        </h2>
        <ReactMap />
      </div>

      {/* cards */}

      {/* Cards */}
      <div className="max-w-7xl mx-auto text-white mb-10 pb-20">
        {" "}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Fonctionnement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 justify-items-center">
          {" "}
          {/* card1 */}
          <div className="bg-green-600 hover:bg-green-700 max-w-xs w-full h-60 p-5 shadow-2xl rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
            {" "}
            <Search size={40} className="mb-4" /> 
            <h1 className="font-bold text-2xl mb-4">1. Recherchez</h1>
            <p className="text-lg">
              Utilisez notre carte interactive pour localiser les écoles dans
              votre région
            </p>
          </div>
          {/* card2 */}
          <div className="bg-green-600 hover:bg-green-700 max-w-xs w-full h-60 p-5 shadow-2xl rounded-sm flex flex-col items-center text-center transform md:translate-y-12 transition-all duration-300 hover:scale-105">
            <Plus size={40} className="mb-4" />
            <h1 className="font-bold text-2xl mb-4">2. Ajoutez</h1>
            <p className="text-lg">
              Ajoutez une école en besoin en quelques clics
            </p>
          </div>
          {/* card3 */}
          <div className="bg-green-600 hover:bg-green-700 max-w-xs w-full h-60 p-5 shadow-2xl rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
            <Star size={40} className="mb-4" />
            <h1 className="font-bold text-2xl mb-4">3. Soutenez</h1>
            <p className="text-lg">
              Contribuez selon vos moyens : dons, bénévolat ou partage
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
