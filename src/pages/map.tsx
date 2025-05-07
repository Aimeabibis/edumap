import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactMap } from "../components/Map";
import { ISchoolModel } from "../model/schoolmodel";
import { Donbtn } from "./don";

export const Maps = () => {
  const [schools, setSchools] = useState<ISchoolModel[]>([]);
  const styleMap = { height: 650 };
  useEffect(() => {
    fetch("http://localhost:5000/api/schools/validated")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error("Erreur fetch:", err));
  },[]);
  return (
    <>
      <Navbar />
      <div className=" flex flex-col pt-15">
        {/* <div>
          <h1 className="text-4xl md:text-4xl font-bold mb-8 mt-8 text-center text-green-800">
            Carte des écoles en besoin
          </h1>
          <p
            className="text-lg md:text-xl text-center mb-8 leading-relaxed opacity-0 animate-slide-in-left"
            style={{
              animation: "slide-in-left 1s ease-out forwards",
            }}
          >
            Découvrez les écoles en besoin à travers le pays et agissez pour soutenir l'éducation. <br />Cliquez sur les marqueurs pour en savoir plus sur chaque école et
            comment vous pouvez aider.
          </p>

         
        </div> */}
        <div className="h-[77vh]">
          <ReactMap styleMap={styleMap} data={schools} />
        </div>

        {/* <div className="fixed bottom-[25vh] right-[25px] z-10">
            <Donbtn count={10} />
        </div> */}
      </div>
      <Footer />
    </>
  );
};
