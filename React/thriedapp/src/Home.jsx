import React from "react";
import { Typography, Box } from "@mui/material";


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">

      {/* Hero Section */}

      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Home Page</Typography>
        <Typography>Welcome to our React + MUI App</Typography>
      </Box>
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Build Faster with React + Vite
        </h1>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
          A modern frontend setup with lightning-fast builds, hot module
          replacement, and a smooth developer experience.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose This Stack?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">⚡ Ultra Fast</h3>
              <p className="text-gray-600">
                Vite uses native ES modules for instant server start and fast
                builds.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">🎨 Tailwind CSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapidly building beautiful UIs.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">⚛️ React</h3>
              <p className="text-gray-600">
                Component-based architecture makes your app scalable and
                maintainable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">99%</h3>
            <p className="mt-2 text-gray-600">Performance Score</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">10x</h3>
            <p className="mt-2 text-gray-600">Faster Development</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">24/7</h3>
            <p className="mt-2 text-gray-600">Developer Happiness 😄</p>
          </div>
        </div>
      </div>



      {/* Footer CTA */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build something amazing?
        </h2>
        <p className="text-indigo-100 mb-6">
          Start your journey with React, Vite, and Tailwind today.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition">
          Start Building 🚀
        </button>
      </div>
    </div>
  );
}

export default Home;
