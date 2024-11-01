import './App.css';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react'
import Section from './components/Section';
import { bagImages, feederImages, feeder2Images, jacketImages, pajamaImages} from './components/images'
import axios from 'axios'
import Header from './components/Header';
import OberniFeeder from '../src/assests/feeder.jpg'
import Romper from '../src/assests/romper.jpg'
import Towel from '../src/assests/towel.jpg'
import DrBrown from '../src/assests/drbrown.jpg'
import TonguCleaner from '../src/assests/toungucleaner.jpg'
import Toothbrush from '../src/assests/toothbrush.jpg'
import Needlenosecleaner from '../src/assests/needlenosecleaner.jpg'
import electricnosecleaner from '../src/assests/electricnosecleaner.jpg'

const data = [
  {
      id: 1,
      heading: "Baby diaper bags",
      deliveryCharges: "Free shipping 09 - 15 nov",
      price:"5,729",
      sale: "176+ sold",
      description: "Spacious and stylish, this Large Maternity Pack Baby Diaper Bag is designed for busy moms on the go",
      link: "https://s.click.aliexpress.com/e/_EI9Gc57",
      src: bagImages.BagImg1
  },
    { id: 2,
      heading: "Baby Philips Feeders",
      deliveryCharges: "Free shipping 07 - 14 nov",
      price:"7,287",
      sale: "194+ sold",
      description: "The PHILIPS AVENT Newborn Baby PPSU Bottles are designed specifically to support the comfort and health of newborns aged 0-6 months and beyond",
      link: "https://s.click.aliexpress.com/e/_omPZBCx",
      src: feederImages.FeederImg1
    },
    {
      id: 3,
      heading: "Baby Philips Feeders",
      deliveryCharges: "Free shipping 07 - 14 nov",
      price:"9,224",
      sale: "90 sold",
      description: "The PHILIPS AVENT High Boron Silicon Glass Milk Bottle is designed for newborns aged 0 to 6 months, offering durability and safety with high boron silicon glass",
      link: "https://s.click.aliexpress.com/e/_EyMpn45",
      src: feeder2Images.Feeder2Img1
    },{
      id: 4,
      heading: "Baby girl warm winter soft jacket",
      deliveryCharges: "Free shipping over 2,780 07 - 14 nov",
      price:"2,488",
      sale: "600+ sold",
      description: "Keep your little one cozy and adorable in this Winter Baby Girl Jacket!. Made for babies aged 0-3 years",
      link: "https://s.click.aliexpress.com/e/_EwX0IWV",
      src:  jacketImages.JacketImg5
    },
    {
      id: 5,
      heading: "Baby pajama come rompers",
      deliveryCharges: "Free shipping over 2,780 08 - 15 nov",
      price:"2,435",
      sale: "2,000+ sold",
      description: "Cozy and adorable, these Baby Pajamas with a zipper closure are crafted from soft fleece to keep newborns warm and comfortable all winter long",
      link: "https://s.click.aliexpress.com/e/_mMrmDDq",
      src: pajamaImages.PajamaImg5
    },
    {
      id: 6,
      heading: "Dr brown feeder",
      deliveryCharges: "Free shipping",
      price:"11,727",
      sale: "10 sold",
      description: "Dr. Brown's newborn baby bottle / 60ML 120ML 250ML / Standard mouth PP milk bottle 3PCS",
      link: "https://s.click.aliexpress.com/e/_EIqFTrP",
      src: DrBrown
    },
    {
      id: 7,
      heading: "Oberni feeder",
      deliveryCharges: "Free shipping over 2777 Nov 11-16",
      price:"878",
      sale: "13  sold",
      description: "Oberni 120ml 150ml Newborn Feeding Milk Bottle Cute Anti Colic With Glass Material",
      link: "https://s.click.aliexpress.com/e/_Eva2sxF",
      src: OberniFeeder,
    },
    {
      id: 8,
      heading: "3 piece baby towel",
      deliveryCharges: "Free shipping over 2777 Nov 11-16",
      price:"976",
      sale: "24 sold",
      description: "Baby 3pcs BathTowel Boys Girls 100% Cotton Children Baby Towels Blanket For Newborn Washcloth Gauze Washcloth Infant Swaddle",
      link: "https://s.click.aliexpress.com/e/_oBUlA15",
      src: Towel,
    },
    {
      id: 9,
      heading: "Baby Romper",
      deliveryCharges: "Free shipping over 2777 Nov 12-18",
      price:"2,382",
      sale: "24 sold",
      description: "Four Seasons Newborn Baby Rompers Jumpsuit suit Baby Clothes for Girls Long Sleeve Jumpsuit overalls Baby Clothing Baby Romper",
      link: "https://s.click.aliexpress.com/e/_onKS3Kx",
      src: Romper,
    },
    {
      id: 10,
      heading: "Baby Tongue Cleaner",
      deliveryCharges: "Shipping 797",
      price:"1,225",
      sale: "33 sold",
      description: "30Pcs Baby Tongue Cleaner Baby Cleaning Soft Gauze Toohthbrush",
      link: "https://s.click.aliexpress.com/e/_EyAmrvF",
      src: TonguCleaner,
    },
    {
      id: 11,
      heading: "Nano tooth brush",
      deliveryCharges: "shipping 592",
      price:"423",
      sale: "3000+ sold",
      description: "New 2PCS Silicone Baby Toothbrush Soft Toothbrush Tongue Brush Baby Oral Cleaner 0-2 Years Infant Toddler Oral Care BPA Free",
      link: "https://s.click.aliexpress.com/e/_m0BDDG8",
      src: Toothbrush,
    },
    {
      id: 12,
      heading: "Electric Baby Nose Cleaner",
      deliveryCharges: "Free shipping Nov 12 - 18",
      price:"4,400",
      sale: "2000+ sold",
      description: "Dr.isla Baby Nose Cleaner Silicone Adjustable Suction Electric Child Nasal Aspirator Safety Convenient Low Noise",
      link: "https://s.click.aliexpress.com/e/_EGBhrNL",
      src: electricnosecleaner,
    },
    {
      id: 13,
      heading: "Baby Needle Nose Cleaner",
      deliveryCharges: "Free shipping",
      price:"424",
      sale: "10000+ sold",
      description: "Needle Tube Nasal Aspirator Baby Care Nasal Aspirator Cleaner Baby Rhinitis Nasal Washer baby health New Born Baby Accessories",
      link: "https://s.click.aliexpress.com/e/_EjGJZed",
      src: Needlenosecleaner,
    },
  ]


function App() {

  useEffect(()=>{
    updateUser()
  }, [])


  const updateUser = async () => {
    try {
      
      await axios.post(`${process.env.REACT_APP_BASE_URL}/increment`)
    } catch (error) {
      console.log(error);
      
    }
      
  }

  return (
    <div className="App bg-white dark:bg-white">
    
    <Helmet>
        <title>Affiliate Products</title>
    </Helmet>

    <Header/>

    <section>
        <Section data={data} />
    </section>
    {/* <section>
        <Section data={feederData}  />
    </section>

    <section>
        <Section data={feeder2Data}  />
    </section>
    <section>
        <Section data={jacketData}  />
    </section>
    <section>
        <Section data={pajamaData}  />
    </section> */}
    

    </div>
  );
}

export default App;



