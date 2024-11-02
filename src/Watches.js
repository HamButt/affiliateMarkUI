import React from 'react'
import { Image } from 'primereact/image';
import {Link} from 'react-router-dom'
import W1 from '../src/assests/watches/S16af9460da42419e8c0d09891e9c0830E.jpg'
import W2 from '../src/assests/watches/S3c75e50ac5cc49adad99203b518da7bep.jpg'
import W3 from '../src/assests/watches/S9acac7d3d8844d90b5f003678377e36bN.jpg'
import W4 from '../src/assests/watches/Sc2d77d30d0184a9784c163c1bca9a06ei.jpg'
import W5 from '../src/assests/watches/Sdfff47a3f85e4032936fd786abf8f5c88.jpg'
import W6 from '../src/assests/watches/Se43e57415ddc435786578f0cf8aeb28cs.jpg'

const images = [W1, W2, W3, W4, W5, W6]

export default function Watches() {
  return (

    <section >
    <div className="flex flex-wrap justify-center sm:justify-between p-4 bg-gray-100 dark:bg-gray-100" >
        <p className="text-lg sm:text-4xl py-2 font-bold text-black">Premium watch 48% OFF Hurry up!!!</p>
        <p className="text-lg sm:text-4xl py-2 font-bold text-black italic">Super Deal</p>
    
        <div className="flex flex-col sm:flex-row items-start bg-white dark:bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300">

                <div className=" gap-2 p-4">
                    <Image 
                        src={images[0]} 
                        alt="Product Image" 
                        preview
                        className="rounded w-full object-contain " 
                    />
                </div>

            <div className=" w-full p-4">
                <h3 className="text-lg sm:text-3xl font-semibold text-black line-clamp-1">
                    Top Brand Quartz Watch for Men
                </h3>
                <p className="text-black font-semibold text-md sm:text-lg mt-5 line-clamp-2 ">
                    OLEVS Top Brand Quartz Watch for Men Classic Business Men's Wristwatch Dual Calendar Waterproof Men's Watches
                </p>
                <p className="text-lg mt-2 font-bold text-black">494 sold</p>
                <p className="text-lg  font-bold text-black">Deliver charges: Free shipping</p>
                <p className="text-lg mt-2 font-bold text-black">Delivery: 14 - 21 Nov</p>
                <p className='text-lg font-bold text-black line-through'>Before: PKR 8,322 </p>
                <p className="text-lg font-bold text-black">Now: PKR 4,328 </p>
                <small className='font-semibold' >Click image to view details clearly</small>
                <div className='mt-8 w-full' >

                    <Link href="https://s.click.aliexpress.com/e/_ExnvLdb" target="_blank" rel="noopener noreferrer"
                        className="text-center text-xl bg-black text-white rounded transition duration-200 px-4 py-3 w-56">
                        Buy Now
                    </Link>
                </div>
            </div>

        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
                {images?.map((img, index) => (
                <Image 
                    key={index}
                    src={img} 
                    alt="Product Image" 
                    preview
                    className="rounded w-full object-contain " 
                />
                ))}
        </div>
    </div>
    
    <div className="separator relative my-5 " >
        <div className="absolute inset-0 flex items-center " >
            <span className="w-full border-t border-black"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase " >
            <span className="bg-white dark:bg-white text-sm px-2 font-semibold text-black">You are at the end of the page</span>
        </div>
    </div>
</section>


  )
}
