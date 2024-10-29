import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Image } from 'primereact/image';
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Navigation } from 'swiper/modules';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const images = [
    {
        id: 1,
        src: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg"
    },
    {
        id: 2,
        src: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg"
    },
    {
        id: 3,
        src: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg"
    },
    {
        id: 4,
        src: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg"
    }
]

export default function App() {
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
    <motion.section style={{backgroundImage}} className='relative h-screen place-content-center overflow-hidden bg-gray-950 pt-28 px-5'>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded py-2 flex justify-center flex-wrap'>
            <div className="images-section flex flex-wrap items-start justify-center h-full w-[600px]">
                {
                    images.map((img) => <Image src={img.src} imageClassName="h-full p-1 rounded-lg" width='300' alt="Image" preview />)
                }

            </div>
            <div className="description px-6 text-start w-[600px]">
                <h1 className='text-xl text-white dark:text-white font-semibold' >Men Premium Watches</h1>
                <p className='text-sm text-white dark:text-white font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ab? Labore sequi voluptatem aut aperiam maiores possimus, 
                    ipsa facilis omnis optio velit cum ea nisi beatae nam quibusdam doloribus explicabo autem provident aspernatur? 
                    Asperiores, quo rerum nisi quibusdam error nam ad deserunt, voluptatem sit incidunt iure totam repellat obcaecati!
                     Ab quae libero harum numquam veniam, necessitatibus distinctio voluptates quibusdam amet blanditiis! 
                </p>
                <Link >
                <motion.button
                    style={{ border, boxShadow}}
                    whileHover={{scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-white dark:text-white mt-6 transition-colors hover:bg-gray-950/50">
                    Buy now
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-[540px] flex justify-center'>
            <div className="images-section flex flex-wrap items-start justify-center h-full w-[600px]">
                {
                    images.map((img) => <Image src={img.src} imageClassName="h-full p-1 rounded-lg" width='300' alt="Image" preview />)
                }

            </div>
            <div className="description px-6 text-start w-[600px]">
                <h1 className='text-xl text-white dark:text-white font-semibold' >Men Premium Watches</h1>
                <p className='text-sm text-white dark:text-white font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ab? Labore sequi voluptatem aut aperiam maiores possimus, 
                    ipsa facilis omnis optio velit cum ea nisi beatae nam quibusdam doloribus explicabo autem provident aspernatur? 
                    Asperiores, quo rerum nisi quibusdam error nam ad deserunt, voluptatem sit incidunt iure totam repellat obcaecati!
                     Ab quae libero harum numquam veniam, necessitatibus distinctio voluptates quibusdam amet blanditiis! 
                </p>
                <Link >
                <motion.button
                    style={{ border, boxShadow}}
                    whileHover={{scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-white dark:text-white mt-6 transition-colors hover:bg-gray-950/50">
                    Buy now
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-[540px] flex justify-center'>
            <div className="images-section flex flex-wrap items-start justify-center h-full w-[600px]">
                {
                    images.map((img) => <Image src={img.src} imageClassName="h-full p-1 rounded-lg" width='300' alt="Image" preview />)
                }

            </div>
            <div className="description px-6 text-start w-[600px]">
                <h1 className='text-xl text-white dark:text-white font-semibold' >Men Premium Watches</h1>
                <p className='text-sm text-white dark:text-white font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ab? Labore sequi voluptatem aut aperiam maiores possimus, 
                    ipsa facilis omnis optio velit cum ea nisi beatae nam quibusdam doloribus explicabo autem provident aspernatur? 
                    Asperiores, quo rerum nisi quibusdam error nam ad deserunt, voluptatem sit incidunt iure totam repellat obcaecati!
                     Ab quae libero harum numquam veniam, necessitatibus distinctio voluptates quibusdam amet blanditiis! 
                </p>
                <Link >
                <motion.button
                    style={{ border, boxShadow}}
                    whileHover={{scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-white dark:text-white mt-6 transition-colors hover:bg-gray-950/50">
                    Buy now
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
                </Link>
            </div>
        
        
        </SwiperSlide>
       
      </Swiper>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}
