// import React, { useEffect, useState } from 'react';

// const images = [
//   '/images/slide1.jpg',
//   '/images/slide2.jpg',
//   '/images/slide3.jpg',
// ];

// const FadeCarousel: React.FC = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000); // 4s
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`Slide ${index + 1}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         />
//       ))}

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             className={`w-3 h-3 rounded-full ${
//               i === current ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FadeCarousel;
