import React from "react";
import { Bell } from "lucide-react";

interface NotificationButtonProps {
  count?: number;
}

export const Don = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Faites un don</h1>
        <p className="text-lg mb-8">
          Votre générosité peut faire une réelle différence dans la vie des
          enfants défavorisés.
        </p>
        <a
          href="https://www.helloasso.com/associations/eduq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Faire un don
        </a>
      </div>
    </>
  );
}
export const Donbtn = ({ count = 0 }: NotificationButtonProps) => {
    return (
        <button className="relative bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2">
          {/* <Bell className="w-8 h-8" /> */}
          <span>Ecoles sélectionnées</span>
    
          {count > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </button>
      );
}