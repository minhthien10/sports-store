import React from "react";
import { useNavigate } from "react-router-dom";

import adidas from "/src/assets/brand/adidas.png";
import nike from "/src/assets/brand/nike.png";
import mizuno from "/src/assets/brand/mizuno.png";
import puma from "/src/assets/brand/puma.png";
import asics from "/src/assets/brand/asics.png";

const Brand = () => {
  const navigate = useNavigate();

  const brands = [
    { id: 1, name: "Adidas", image: adidas, slug: "adidas" },
    { id: 2, name: "Nike", image: nike, slug: "nike" },
    { id: 3, name: "Mizuno", image: mizuno, slug: "mizuno" },
    { id: 4, name: "Puma", image: puma, slug: "puma" },
    { id: 5, name: "Asics", image: asics, slug: "asics" },
  ];

  return (
    <section className="w-full bg-white py-6 border-b border-gray-100 font-sans">
      <div className="w-full max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase font-bold tracking-widest text-gray-400">
            Thương hiệu chính hãng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => navigate(`/category/${brand.slug}`)}
                className="cursor-pointer p-1 flex items-center justify-center hover:scale-110 transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
