import React, { useEffect, useState } from "react";
import { Map, Marker, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { ISchoolModel } from "../model/schoolmodel";
import { StripeForm } from "./stripe";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
export interface IReactMap {
  data?: ISchoolModel[];
  styleMap?: {
    height: number;
  };
}

export const ReactMap = ({ styleMap = { height: 400 }, data }: IReactMap) => {
  const [isOpen, setIsOpen] = useState(false);

  const [elementSelected, setElementSelected] = useState<ISchoolModel | null>(
    null
  );
  const handleMarkerClick = (school: ISchoolModel) => {
    setElementSelected(school);
  };

  return <>
  <Map
      initialViewState={{
        longitude: 2.3468195,
        latitude: 6.4503024,
        zoom: 10,
      }}
      style={styleMap}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      {data &&
        data.map((school: ISchoolModel) => (
          <Marker
            key={school._id}
            longitude={school.longitude}
            latitude={school.latitude}
            anchor="bottom"
          >
            <span onClick={() => handleMarkerClick(school)} className="bg-red">
              <img
                className="w-[60px]"
                src="./../../public/marcker_rouge.png"
                alt=""
              />
            </span>
            <div>{elementSelected?.name}</div>
          </Marker>
        ))}
      {elementSelected && (
        <Popup
          longitude={elementSelected.longitude}
          latitude={elementSelected.latitude}
          onClose={() => setElementSelected(null)}
          closeOnClick={false}
          anchor="top"
        >
          <div className="flex flex-col">
            <button onClick={()=>setIsOpen(true)} className="bg-green-700 mb-1 text-[16px] text-white font-bold py-2 px-4 rounded mt-2">
              Faire un don
            </button>

            <h2 className="text-lg font-bold">{elementSelected.name}</h2>

            <p>{elementSelected.studentsCount} élèves</p>
            <p>{elementSelected.classroomCount} salles de classe</p>
          </div>
          <div>
            <label className="text-l font-bold "> Besoins principaux</label>
            <div>
              {elementSelected.needs.map((need, index) => (
                <div key={index} className="flex ">
                  {need === "materiel" && (
                    <div className="flex ">
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Matériel scolaire
                      </label>
                    </div>
                  )}
                  {need === "renovation" && (
                    <div className="flex ">
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Rénovation des salles
                      </label>
                    </div>
                  )}
                  {need === "enseignants" && (
                    <div className="flex ">
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Besoin d'enseignants
                      </label>
                    </div>
                  )}
                  {need === "sanitaire" && (
                    <div className="flex ">
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Installations sanitaires
                      </label>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-3 ">
                <img
                  className="h-[200px] W-[200px] mb-2"
                  src="./../../public/Récréation_des_filles_à_l'école.jpg"
                  alt=""
                />
                <img
                  className="h-[200px] W-[200px]"
                  src="./../../public/Récréation_des_filles_à_l'école.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Popup>
        
      )}
      
    </Map>

  {
    isOpen && <Elements stripe={loadStripe("pk_test_51RLSDlISvHt6ormbhQ6fSipchkCeoaHiA6BEUTPwhKa42UIWWFE7P9WSGzVM0qvM4eG5VHqQQZQRn2YIe6a9kK4q00J4bqqxG4")}>
    <StripeForm schoolId={(elementSelected as ISchoolModel)?._id}/>
  </Elements> 
  } 
  </>
     
  ;
};
