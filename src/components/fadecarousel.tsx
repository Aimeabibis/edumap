import React from "react"

export const FadeCarousel = () => { 
  return (
    <section className="bg-white py-10 mb-15 px-5 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative w-[20vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="./../../public/envol.jpg"
                alt="Partenaire 1"
                className="w-[full] h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div> 
          <div className="w-full max-w-3xl ml-4">
            <div className="relative w-[20vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="./../../public/Osm_benin_logo.svg"
                alt="Partenaire 2"
                className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            </div>
            <div className="w-full max-w-3xl ml-4">
            <div className="relative w-[20vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="./../../public/numeric_art.jpg"
                alt="Partenaire 3"
                className="w-full h-[39vh] transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              </div>
              </div>


        
        </div>
        </div>
       
        </section>

    )
}
