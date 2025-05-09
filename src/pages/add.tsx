import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactMap } from "../components/Map";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


export const Add = () => {
  const navigate = useNavigate();
  let form

  const handleSubmit = async (e) => {
    e.preventDefault();
    form = e.target;
    const formData = new FormData();

    // Convertir les besoins en tableau de strings
    const needs: string[] = [];
    if (form.besoin1.checked) needs.push("materiel");
    if (form.besoin2.checked) needs.push("renovation");
    if (form.besoin3.checked) needs.push("enseignants");
    if (form.besoin4.checked) needs.push("sanitaire");

    // Remplir FormData selon le schema
    formData.append("name", form.nom.value);
    formData.append("region", form.region.value);
    formData.append("commune", form.commune.value);
    formData.append("latitude", form.latitude.value);
    formData.append("longitude", form.longitude.value);
    formData.append("studentsCount", form.studentsCount.value);
    formData.append("classroomCount", form.classroomCount.value);
    needs.forEach((item) => {
      formData.append("needs", item);
    });
        formData.append("description", form.besoin.value);


    // Images
    const files = form.images.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/schools", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("École enregistrée avec succès !");

      if (response.ok) {
       
        navigate("/home"); // ou une autre page
      } else {
        console.error("Erreur API :", data);
        toast.error("Erreur lors de l'envoi du formulaire.");
     
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      toast.error("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mt-30 mb-30">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
            Enregistrer une école en besoin
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-bold">Informations de l'école</label>
              <div className="flex flex-wrap pt-4">
                <div className="w-1/2 pr-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom & Prénom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
                  />
                </div>

                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom de l'école
                  </label>
                  <input
                    type="text"
                    name="ecole"
                  
                    className="mt-1 w-full px-4 py-2 border rounded-md "
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Images d'écoles
                  </label>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
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
                  name="region"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-md"
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
                  name="commune"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label>Localisation</label>
              <ReactMap styleMap={{ height: 200 }}  form={form}  objetKey={{ longitude: "longitude", latitude: "latitude" }} />
              <div className="flex flex-wrap mt-2">
                <div className="w-1/2 pr-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Latitude
                  </label>
                  <input
                    type="text"
                    name="latitude"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Longitude
                  </label>
                  <input
                    type="text"
                    name="longitude"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="font-bold">Informations détaillées</label>
              <div className="flex flex-wrap mt-2">
                <div className="w-1/2 pr-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Effectif des apprenants
                  </label>
                  <input
                    type="number"
                    name="studentsCount"
                    min="1"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre de salles de classe
                  </label>
                  <input
                    type="number"
                    name="classroomCount"
                    min="1"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label>Besoins principaux</label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" name="besoin1" />
                  <span className="ml-2">Matériel scolaire</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="besoin2" />
                  <span className="ml-2">Rénovation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="besoin3" />
                  <span className="ml-2">Enseignants</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="besoin4" />
                  <span className="ml-2">Sanitaires</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description du besoin
              </label>
              <textarea
                name="besoin"
                rows={4}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
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
