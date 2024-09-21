import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import whatsNewData from "../states/WhatsNewData.json";
import { card1, card2, card3, card4 } from "../assets/images/images"; // Import images

const imageImports = {
  card1,
  card2,
  card3,
  card4,
  // Map other images as needed or handle external URLs differently
};

const WhatsNew = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4 text-center w-full">
        What's New
      </h1>

      <div className="overflow-x-scroll no-scrollbar mb-10">
        <div className="flex space-x-6 justify-center">
          {whatsNewData.map((item, index) => {
            const imageSrc = imageImports[item.image] || item.image; // Get the image source

            return (
              <Link
                key={index}
                to={item.link || "#"}
                className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg flex-shrink-0"
                style={{ width: "300px" }}
              >
                <img
                  src={imageSrc}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-2 text-center">
                  <p className="font-semibold whatsnewcardtext">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
