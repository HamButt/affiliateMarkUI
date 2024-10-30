import React, {useEffect} from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Image } from 'primereact/image';
import { FiArrowRight } from "react-icons/fi";
import {Link} from 'react-router-dom'

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


function Section({data}) {

    const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (

    <motion.div style={{backgroundImage}}  className='min-h-screen h-full py-8 px-4 md:px-5'>
        <div className="flex items-center justify-between">
            <h1 className='text-xl md:text-4xl text-white font-semibold'>{data[0]?.heading}</h1>
            <h1 className='text-lg md:text-4xl text-white font-semibold animate-bounce'>SALE SALE SALE</h1>
        </div>
        <section className='flex mt-8 flex-wrap justify-center items-start' >
            <div className="images-section flex flex-wrap items-center justify-start h-full w-[600px] mt-2">
                {   data[0]?.images?.length > 0 ?
                    data[0]?.images?.map((img) => <Image src={img} imageClassName="p-[2px] rounded-lg w-[200px]"  alt="Image" preview />)
                    :
                    <div className='text-white flex items-center ' >
                        <p className='loading loading-lg mx-auto' ></p>
                        <span className='ms-2 text-lg' >Loading product...</span>
                    </div>
                }

            </div>
            <div className="description px-6 text-start w-[620px] mt-2">
                <h1 className='text-lg md:text-2xl text-white dark:text-white'>Details:</h1>
                <p className='text-sm md:text-lg text-white dark:text-white mt-2'>Deliver charges: {data[0]?.deliveryCharges}</p>
                <p className='text-sm md:text-lg text-white dark:text-white '>Price: PKR {data[0]?.price}</p>
                <p className='text-sm md:text-lg text-white dark:text-white'>Sale: {data[0]?.sale}</p>
                <h1 className='text-lg md:text-2xl text-white dark:text-white mt-2'>Description:</h1>
                <p className='text-sm md:text-lg text-white dark:text-white  mt-2' >{data[0]?.description}</p>
                <Link to={data[0]?.link} target='_blank'>
                <motion.button style={{ border, boxShadow}} whileHover={{scale: 1.015 }} whileTap={{ scale: 0.985 }}
                    className="group relative flex w-56  items-center justify-center text-lg gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-white dark:text-white mt-6 transition-colors hover:bg-gray-950/50">
                    Buy now
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
                </Link>
            </div>
        </section>
    </motion.div>
  )
}

export default Section