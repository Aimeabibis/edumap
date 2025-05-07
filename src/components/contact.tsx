import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

export const Contact = () => {
  return (
    <section className="bg-green-700 py-12 px-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contactez-nous
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Infos de contact */}
          <div className="md:w-1/2 text-white space-y-4">
            <h3 className="text-2xl font-semibold">Nos coordonnées</h3>

            <p><strong>Téléphone :</strong> +229 91 23 45 67</p>
            <p><strong>Email :</strong> projetedumap@gmail.com</p>
            <p><strong>Adresse :</strong> Abomey-Calavi, Bénin</p>
            <div className="mt-6">
              <p className="mb-2 font-semibold">Suivez-nous :</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/edumap/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                  <Linkedin className="hover:text-gray-300 transition" />
                </a>
                <a href="https://x.com/EduMapbj" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="hover:text-gray-300 transition" />
                </a>
                <a href="https://www.instagram.com/edumapofficiel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="hover:text-gray-300 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Votre message"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button type="submit" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow">
                Envoyer
              </button>
              <p className="text-xs text-gray-600 italic">
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
