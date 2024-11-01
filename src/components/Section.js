import React from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Image } from 'primereact/image';
import {Link} from 'react-router-dom'

import { motion } from "framer-motion";



function Section({data}) {



  return (

    <motion.div  className='min-h-screen h-full py-8 mt-12 px-4 md:px-5'>
        <div className="flex items-center justify-between bg-gray-300 p-2 rounded">
            <h1 className='text-xl md:text-4xl text-black font-semibold'>Baby products</h1>
            <h1 className='text-lg md:text-4xl text-black font-semibold'>BIG SALE  <sup >60% OFF</sup></h1>
        </div>
        
        <section className='flex flex-wrap justify-center sm:justify-between mt-2' >

            {     
              data?.map((d) => {
                  return (
                  <div key={d.id} className="sm:w-[310px] mt-3 rounded overflow-hidden shadow-lg bg-white dark:bg-white transform transition-transform duration-300">
                  
                        {d.src ? <Image src={d.src} imageClassName="rounded-t w-full"  alt="Image" preview /> : 
                        <div className='w-full text-center flex items-center justify-center py-20' >
                          <span className='loading loading-md' ></span>
                        </div>
                        }
                        <div className="px-3 py-2">

                          <h3 className="text-md font-semibold text-black dark:text-black line-clamp-1 ">{d?.heading}</h3>
                          <p className="text-black dark:text-black text-sm mt-2 line-clamp-2 font-semibold">{d?.description}</p>
                          <p className="text-sm mt-2 font-bold text-black dark:text-black">{d?.sale}</p>
                          <p className="text-sm mt-2 font-bold text-black dark:text-black">{d?.deliveryCharges}</p>
                          <div className="flex items-center justify-between mt-2">
                              <p className="text-sm font-bold text-black dark:text-black">Price: PKR {d?.price}</p>
                              <Link target='_blank' to={d.link} className="font-semibold text-center text-sm bg-black text-white rounded transition duration-200 p-2 w-28">
                              Buy Now 
                            </Link>
                          </div>
                        </div>
                      </div>
                  )
              })      
            }
        </section>
        <div className="separator relative mt-5 " >
            <div className="absolute inset-0 flex items-center " >
                <span className="w-full border-t border-black"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase " >
                <span className="bg-white dark:bg-white text-sm px-2 font-semibold text-black">You are at the end of the page</span>
            </div>
        </div>
    </motion.div>
  )
}

export default Section