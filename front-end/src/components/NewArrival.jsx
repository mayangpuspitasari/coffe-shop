import React from 'react';

const NewArrival = () => {
  const products = [
    {
      id: 1,
      name: 'T-Shirt',
      price: '$25',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Shoes',
      price: '$50',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$100',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'Bag',
      price: '$75',
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <section className="container mx-auto my-12 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">
        Produk Baru
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-blue-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;

