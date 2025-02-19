import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import noyaBg from "/images/noya-background-2 1.png";
import {menuCategories} from '../assets/categories';
import { useParams } from 'react-router-dom';

const SingleCategory: React.FC = () => {
    const slug = useParams();
    const [category, setCategory] = useState<{ title: string; items: string[]; slug: string; dishes: { title: string; description: string; price: number; }[] } | undefined>(undefined);
    
    useEffect(() => {
        const categorySlug = slug.slug; // Assuming slug is an object with a 'slug' property
        const foundCategory = menuCategories.find((cat) => cat.slug === categorySlug);
        setCategory(foundCategory);
        console.log("Found Category", foundCategory);
    }, [slug]);

    return (
        <div className="min-h-screen relative text-[#D4B069] overflow-hidden">
          <div 
            className="fixed inset-0 w-full h-full bg-cover bg-center brightness-[0.7] -z-10"
            style={{ backgroundImage: `url(${noyaBg})` }}
          />
          <Navbar />
          <div className="relative z-10 p-8 pt-52">
            <div className="max-w-3xl mx-auto">
              <h1 
                className="text-4xl font-italiana text-center mb-12 italic text-[#D4B069]"
              >
               {category?.title}
              </h1>
    
              <div className="space-y-8">
                {category?.dishes.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[#D4B069] bg-black bg-opacity-50 p-6 rounded"
                  >
                    <h2 className="text-3xl font-italiana mb-4 italic font-light">{item.title}</h2>
                    <div>
                     {item?.description && <p className="text-[#D4B069] font-italiana mb-4">{item.description}</p>}
                    </div>
                      <div className="mt-4 flex justify-end">
                      {item.price ? <p className="text-3xl font-italiana">{item.price}$</p> : null}
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}   

export default SingleCategory