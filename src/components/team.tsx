// TestimonialsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Abigaïl AGBENOMBA',
    title: 'Développeuse Web & Cartographe',
    image: './../../public/abi.JPG',
  },
  {
    name: 'Saliou ABDOU ',
    title: 'Expert en cartographie numérique',
    image: './../../public/User-avatar.svg.png',
  },
  {
    name: 'Roméo ADANHOUME',
    title: 'Développeur full stack',
    image: './../../public/User-avatar.svg.png',
  
  },
  {
    name: 'Lili LALA',
    title: 'Spécialiste en relations communautaires',
    image: './../../public/User-avatar.svg.png',
  
  },
  {
    name: 'Mickaëla ISSA',
    title: 'Spécialiste en communication',
    image: './../../public/User-avatar.svg.png',
  
  },
];

const Team = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 ">
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-sm shadow-md mb-15 ">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-30 h-30 rounded-sm mb-4  "
                  />                                
                </div>
                <div className=' text-center mt-8'>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <h4 className="text-gray-500 mb-2">{testimonial.title}</h4>   
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
