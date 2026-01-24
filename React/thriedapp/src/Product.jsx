import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    category: "Gadgets",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$89",
    category: "Fashion",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Backpack",
    price: "$59",
    category: "Accessories",
    image: "https://via.placeholder.com/300",
  },
];

function Products() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-gray-600">
          Explore our hand-picked collection of high-quality products designed
          to make your life better.
        </p>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white w-[280px] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover"
            />

            {/* Product Content */}
            <div className="p-5">
              <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold text-indigo-600">
                  {product.price}
                </p>

                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Can’t find what you’re looking for?
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our full catalog or contact our support team.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Products;
