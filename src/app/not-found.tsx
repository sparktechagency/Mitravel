"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Home, Search, ArrowLeft,  } from 'lucide-react';
// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';


const NotFoundPage = () => {
  const handleGoHome = () => {
    // Replace with your routing logic
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleSearch = () => {
    // Replace with your search functionality
    console.log('Search functionality');
  };

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="pt-2">
        {/* <Header /> */}
      </div>
      
      <div className=" flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Animated 404 */}
        <div className="text-center mb-8">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
              404
            </h1>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce opacity-80">
              <span className="absolute inset-0 flex items-center justify-center text-2xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry though – even the best explorers sometimes take a wrong turn!
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGoHome}
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Home size={20} />
              Go Home
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleSearch}
              className="group flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Search size={20} />
              Search Site
            </button>
          </div>

          
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      {/* <Footer /> */}
    </section>
  );
};

export default NotFoundPage;