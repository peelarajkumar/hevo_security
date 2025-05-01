"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import cardList from "@/assets/cardslist";
import {
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  "shield-check": ShieldCheckIcon,
  "globe-alt": GlobeAltIcon,
  "check-circle": CheckCircleIcon,
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stopAutoSwitch, setStopAutoSwitch] = useState(false);

  // Auto switch logic
  useEffect(() => {
    if (stopAutoSwitch) return;

    const switchInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardList.length);
    }, 5000);
    return () => clearInterval(switchInterval);
  }, [stopAutoSwitch]);

  // Progress logic
  useEffect(() => {
    if (stopAutoSwitch) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // ~3s
    return () => clearInterval(interval);
  }, [activeIndex, stopAutoSwitch]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setStopAutoSwitch(true);
  };

  const activeCard = cardList[activeIndex];

  return (
    <div className="bg-section-bg min-h-screen pt-[68px] pb-[80px] md:pt-[48px] md:pb-[48px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-title md:text-title-mobile leading-title font-bold min-w-[536px] md:min-w-0">
            Get enterprise-grade security
          </h1>
          <p className="text-subtitle leading-subtitle mt-[28px] mb-[32px]">
            Regulate and control pipeline access your team. Configure the data region as per your need.
          </p>

          <div className="space-y-[24px]">
            {cardList.map((card, index) => {
              const Icon = iconMap[card.icon]; // Dynamically set the icon component
              const isActive = index === activeIndex; // Check if this card is active
              return (
                <div
                  key={card.id} // Ensure card.id is unique or replace it with another unique value
                  onClick={() => handleCardClick(index)}
                  className={`p-[16px] md:p-[12px] rounded-[12px] cursor-pointer transition-all duration-300 ${
                    isActive ? "bg-white border border-card-active-border shadow-card-hover" : "bg-card-inactive"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(#3C3CC9 ${isActive ? progress * 3.6 : 0}deg, #e1e4ea 0deg)`,
                        }}
                      />
                      <div className="absolute inset-1 bg-icon-bg rounded-full flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${isActive ? "text-icon-highlight" : "text-gray-500"}`} />
                      </div>
                    </div>
                    <h3 className="text-progress-title md:text-progress-title-mobile leading-progress-title font-semibold">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full md:w-[496px] max-w-full mt-[24px] md:mt-0">
            <Image
              src={activeCard.image}
              alt="Feature Preview"
              width={496}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
