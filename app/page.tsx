"use client";

import { ExternalLink, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand Section */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pata Pushpo
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Explore a wide range of flowers, indoor plants, fruit trees, and garden essentials. 
              Make your home greener with our eco-friendly nursery.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <a
              href="https://patapushpo.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <span>Visit Our Blog</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 opacity-60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-green-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Pata Pushpo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}