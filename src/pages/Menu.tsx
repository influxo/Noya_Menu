import React from 'react';
import noyaBg from "/images/noya-background-2 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const menuCategories = [
    {
      title: 'Starters',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'starters'
    },
    {
      title: 'Main Dish',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'main-dish'
    },
    {
      title: 'Pasta & Risotto',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'pasta-risotto'
    },
    {
      title: 'Salad',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'salad'
    },
    {
      title: 'Sushi',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'sushi'
    },
    {
      title: 'Soup',
      items: ['CARPACCIO BLACK ANGUS', 'BEEF TARTARE', 'CEVICHE'],
      slug: 'soup'
    }
  ];

  const redirect = (category: string) => {
    navigate(`/menu/${category}`);
  }

  return (
    <div className="min-h-screen relative text-[#D4B069] overflow-hidden">
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${noyaBg})` }}
      />
      <Navbar />
      <div className="relative z-10 p-8 pt-52">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl font-serif text-center mb-12 italic text-[#D4B069]"
          >
            Menu
          </h1>

          <div className="space-y-8">
            {menuCategories.map((category) => (
              <div
                key={category.title}
                className="border border-[#D4B069] bg-black bg-opacity-50 p-6 rounded"
                onClick={() => {redirect(category.slug)}}
              >
                <h2 className="text-3xl font-serif mb-4 italic">{category.title}</h2>
                <div className="flex flex-wrap gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-1 border flex justify-center items-center  border-[#D4B069] text-sm rounded"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                  <div className="mt-4 flex justify-end">
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
