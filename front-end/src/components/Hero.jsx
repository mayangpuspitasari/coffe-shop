import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-100 relative">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-20">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ciptakan Kesan Berkelas dengan Dissert Box Berkualitas
          </h1>
          <p className="text-gray-600 my-4">
            Kemasan Praktis dan Menawan untuk Hidangan Penutup Anda
          </p>
          <a
            href="#shop"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Discover Now
          </a>
        </div>

        {/* Right Image */}
        <div className="mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hero Fashion"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

