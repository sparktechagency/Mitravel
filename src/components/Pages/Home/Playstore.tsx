/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

// Import your images
import phone1 from "@/assets/HeroBannerSection/phone1.png";
import phone2 from "@/assets/HeroBannerSection/phone2.png";

const Playstore = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://maniknew5000.sobhoy.com/sendMessage", { email });

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: "Thank you for subscribing! We're excited to have you on our waitlist.",
          confirmButtonColor: "#3085d6",
        });
        setEmail(""); // Clear input after successful submission
      }
    } catch (err: any) {
      console.error(err);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:my-20 xl:container w-[98%] mx-auto bg-gradient-to-r from-[#32DF61] to-[#25B24B] rounded-3xl md:p-8 p-2">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center p-2 md:p-5">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <div className="flex space-x-2">
            <h2 className="md:text-2xl xl:text-4xl">Register </h2>
            <h3 className="md:text-2xl xl:text-4xl font-bold">Interest</h3>
          </div>

          <p className="text-md md:text-lg lg:text-2xl opacity-90 leading-relaxed">
            Explore the world's beauty with our top travel picks. From pristine beaches to majestic mountains, from historic cities to thrilling wildlife adventures.
          </p>

          {/* Email Submit Form */}
          <form
            onSubmit={handleSubmit}
            className="flex bg-white rounded-full p-1 shadow-lg md:max-w-md w-full transition-all duration-300"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-none w-[50px] md:w-full outline-none px-5 py-3 text-gray-800 bg-transparent rounded-full placeholder-gray-400 text-base sm:text-sm"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 bg-[#2E3A6E] text-white mr-1 rounded-full text-sm font-medium transition-all duration-300 min-w-[80px]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

        </div>

        {/* Right Content - Phone Mockups */}
        <div className="flex justify-center lg:justify-end md:-mt-44">
          <div className="relative">
            {/* Phone 1 */}
            <div className="absolute -left-14 sm:-left-20 xl:-left-5 lg:-left-10 md:-left-24 top-20 transform z-20 animate-float">
              <Image
                width={500}
                height={500}
                src={phone1}
                alt="Phone 1 App Interface"
                className="w-[150px] h-[300px] md:w-[200px] md:h-[450px] lg:w-[250px] lg:h-[521px] xl:w-[250px] xl:h-[521px] object-fill md:rounded-[35px]"
              />
            </div>
            {/* Phone 2 */}
            <div className="relative md:-mr-20 lg:-mr-0 lg:ml-36 z-10">
              <Image
                width={500}
                height={500}
                src={phone2}
                alt="Phone 2 App Interface"
                className="w-[150px] h-[300px] md:w-[200px] md:h-[450px] lg:w-[250px] lg:h-[521px] xl:w-[250px] xl:h-[521px] object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      <br /> 

      {/* Bottom Features Section */}
      <div className="md:w-[95%]  lg:w-[95%] xl:w-[65%] md:-mb-20 z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-16 pt-8 bg-gradient-to-r from-[#42539E] to-[#2C386A] rounded-md mx-auto py-5 px-2">
        <div className="text-white px-3 xl:px-5">
          <h4 className="font-bold text-lg mb-2">Intelligent Reward Optimization</h4>
          <p className="text-md opacity-80">
            AI identifies the highest-value redemption options across all connected loyalty programs.
          </p>
        </div>

        <div className="text-white px-3 xl:px-5">
          <h4 className="font-bold text-lg mb-2">One-Click Booking</h4>
          <p className="text-md opacity-80">
            Seamless redemption process with no redirects to external websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playstore;
