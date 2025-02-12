import React from "react";
import noyaBg from "/images/noya-background-2 1.png";
import Navbar from "../components/Navbar";

const MenuSection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="mb-16 z-0">
    <h2 className="text-[#D4B069] text-[40px] font-[italiana] mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="border border-[#D4B069] text-[#D4B069] py-2 px-4 hover:bg-[#D4B069] hover:text-black transition-colors uppercase text-sm"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

const Menu: React.FC = () => {
  const menuData = {
    starters: [
      "CARPACCIO BLACK ANGUS",
      "BEEF TARTARE",
      "CEVICHE",
      "SCAMPI KRUDO 100GR",
      "SCAMPI KRUDO 100GR",
      "SCAMPI KRUDO 100GR",
    ],
    mainDish: ["CARPACCIO BLACK ANGUS", "BEEF TARTARE", "Ceviche"],
    pastaRissoto: ["CARPACCIO BLACK ANGUS", "BEEF TARTARE", "Ceviche"],
    salad: ["CARPACCIO BLACK ANGUS", "BEEF TARTARE", "Ceviche"],
    sushi: ["CARPACCIO BLACK ANGUS", "BEEF TARTARE", "Ceviche"],
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed Background Image to Keep It Static */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${noyaBg})` }}
      />

      <div className="absolute w-full h-[180px] z-50">
        <Navbar />
      </div>

      {/* Ensure Content Starts BELOW Navbar */}
      <div className="relative z-0 px-[8%] pb-20 pt-[200px]">
        <h1 className="text-[#D4B069] text-[50px] font-[italiana] mb-16">
          Menu
        </h1>
        <MenuSection title="Starters" items={menuData.starters} />
        <MenuSection title="Main Dish" items={menuData.mainDish} />
        <MenuSection title="Pasta & Rissoto" items={menuData.pastaRissoto} />
        <MenuSection title="Salad" items={menuData.salad} />
        <MenuSection title="Sushi" items={menuData.sushi} />
      </div>
    </div>
  );
};

export default Menu;
