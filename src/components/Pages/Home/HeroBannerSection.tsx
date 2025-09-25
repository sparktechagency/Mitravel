"use client";
import hero1 from "@/assets/HeroBannerSection/Hero2.png";

const HeroBannerSection = () => {
  return (
    // <section
    //   style={{ backgroundImage: `url(${hero1.src})` }}
    //   className="relative py-5 md:h-[48vh] lg:h-[60vh] xl:h-[95vh] md:py-10 lg:py-12 overflow-hidden bg-cover md:bg-contain lg:bg-cover bg-no-repeat"
    // >
   <section
      style={{ backgroundImage: `url(${hero1.src})` }}
      className="relative w-full bg-cover   py-5 md:h-[48vh] lg:h-[60vh] xl:h-[95vh]  md:py-10 lg:py-12 overflow-hidden md:bg-contain lg:bg-cover bg-no-repeat"
    >
      
      {/* Content Container */}
      {/* <div className=" xl:mt-48 lg:mt-20 md:mt-5 xl:container w-[98%] mx-auto px-2  flex items-center justify-start z-10"> */}


{/* update code start here  */}
      {/* <div className=" xl:mt-48 lg:mt-20 md:mt-5 xl:container md:w-full md:mx-auto px-2  flex items-center justify-start z-10"> */}
         <div className=" ml-3 sm:py-5  xl:mt-48 lg:mt-20 md:mt-5 xl:container md:w-full md:mx-auto px-2  flex items-center justify-start z-10">

{/* update code end here  */}

        <div className="text-left text-white drop-shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-sm md:text-4xl lg:text-4xl xl:text-7xl font-bold mb-1 md:mb-6 leading-tight">
            Smart Reward
            <br className="hidden md:block" />
            <span className="block md:inline text-sm md:text-4xl lg:text-4xl xl:text-[64px] font-bold leading-tight ">
              Travel Simplified
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs md:text-base lg:text-base xl:text-xl mb-2 md:mb-8 text-gray-200 leading-relaxed">
            First AI-powered travel assistant turning loyalty
            <br className="hidden md:block" />
            <span className="md:inline block">points into instant travel.</span>
          </p>

          {/* CTA Button */}
          <button className="w-auto bg-[#37DF32] text-white font-semibold py-1 md:py-4 px-6 md:px-12 rounded-full text-xs md:text-lg lg:text-lg xl:text-3xl relative overflow-hidden">
            <span className="relative z-10">Explore Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;




// "use client";
// import hero1 from "@/assets/HeroBannerSection/Hero2.png";

// const HeroBannerSection = () => {
//   return (
//     <section
//       style={{ backgroundImage: `url(${hero1.src})` }}
//       className="relative py-5 md:py-10 lg:py-12 overflow-hidden bg-no-repeat bg-center bg-cover md:bg-cover lg:bg-cover"
//     >
//       {/* Content Container */}
//       <div className="xxl:my-40 xl:my-32 lg:mt-32 md:mt-5 xl:container w-[98%] mx-auto px-2 flex items-center justify-start z-10">
//         <div className="text-left text-white drop-shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
//           {/* Main Heading */}
//           <h1 className="text-sm md:text-4xl lg:text-4xl xl:text-7xl font-bold mb-1 md:mb-6 leading-tight">
//             Smart Reward
//             <br className="hidden md:block" />
//             <span className="block md:inline text-sm md:text-4xl lg:text-4xl xl:text-[64px] font-bold leading-tight">
//               Travel Simplified
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-xs md:text-base lg:text-base xl:text-xl mb-2 md:mb-8 text-gray-200 leading-relaxed">
//             First AI-powered travel assistant turning loyalty
//             <br className="hidden md:block" />
//             <span className="md:inline block">points into instant travel.</span>
//           </p>

//           {/* CTA Button */}
//           <button className="w-auto bg-[#37DF32] text-white font-semibold py-1 md:py-4 px-6 md:px-12 rounded-full text-xs md:text-lg lg:text-lg xl:text-3xl relative overflow-hidden group">
//             <span className="relative z-10">Explore Now</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBannerSection;


