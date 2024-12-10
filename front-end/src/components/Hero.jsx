import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-20">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ciptakan Kesan Berkelas dengan Dissert Box Berkualitas
          </h1>
          <p className="text-gray-300 my-4 text-lg">
            Kemasan Praktis dan Menawan untuk Hidangan Penutup Anda, Tambahkan
            Sentuhan Elegan pada Setiap Momen.
          </p>
          <a
            href="#shop"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
          >
            Temukan Sekarang
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hero Fashion"
            className="rounded-lg shadow-2xl w-full max-w-xs md:max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

