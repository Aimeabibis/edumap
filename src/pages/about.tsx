import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import  Team  from "../components/team";
import { FadeCarousel } from "../components/fadecarousel";
import { Contact } from "../components/contact";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <section className="min-h-screen text-[#1a1a1a] px-6 pb-4 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="text-green-800">EduMap Bénin</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              EduMap Bénin est une plateforme web citoyenne et solidaire qui
              vise à{" "}
              <span className="text-[#1a1a1a] font-semibold">
                recenser, géolocaliser et faire connaître les écoles en besoin à
                travers le pays
              </span>
              .
            </p>

            <p className="mt-6 text-md md:text-lg leading-relaxed">
              De nombreuses écoles béninoises souffrent de défis majeurs :{" "}
              <span className="text-[#1a1a1a]">infrastructures délabrées</span>,{" "}
              <span className="text-[#1a1a1a]">manque de fournitures</span>, ou
              encore{" "}
              <span className="text-[#1a1a1a]">
                accès limité à l’eau potable
              </span>
              . Notre objectif est de{" "}
              <span className="text-[#1a1a1a] font-bold">
                mettre en lumière ces réalités
              </span>{" "}
              et faciliter l’action des donateurs, ONG, entreprises et
              particuliers prêts à soutenir l’éducation.
            </p>

            <p className="mt-6 text-md md:text-lg leading-relaxed">
              Grâce à une carte interactive intuitive, chaque utilisateur peut
              localiser les écoles en besoin, consulter les détails de leurs
              défis et{" "}
              <span className="text-[#1a1a1a] font-bold">
                agir concrètement
              </span>{" "}
              via des dons, des partenariats ou du bénévolat.
            </p>

            <div className="mt-10">
              <Link to="/map">
                <button className="bg-green-700 hover:bg-green-600 text-white px-6 pt-3 pb-2 rounded-md shadow-md transition duration-300">
                  Découvrir les écoles en besoin
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" text-[#1a1a1a] px-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-800 text-center">
            Equipe
          </h1>
          <Team />
        </section>
        <section className=" text-[#1a1a1a] px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-6 text-green-800">
            Nos Partenaires
          </h1>
          <FadeCarousel />
        </section>
        <section className="pb-15">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
};
