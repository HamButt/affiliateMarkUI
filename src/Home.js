import './App.css';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react'
import Section from './components/Section';
import { bagImages, feederImages, feeder2Images, jacketImages, pajamaImages} from './components/images'
import axios from 'axios'

const bagData = [
  {
      id: 1,
      heading: "Baby diaper bags",
      deliveryCharges: "Free shipping 09 - 15 nov",
      price:"5,729",
      sale: "176+ sold",
      description: "Spacious and stylish, this Large Maternity Pack Baby Diaper Bag is designed for busy moms on the go. With multiple compartments, it’s perfect for organizing baby essentials like diapers, bottles, wipes, and more. It easily attaches to strollers and functions as a portable nappy organizer, luggage tote, and changing bag all in one. This durable, travel-friendly messenger bag is the ultimate companion for smooth and stress-free outings with your little one.",
      link: "https://s.click.aliexpress.com/e/_EI9Gc57",
      images: [bagImages.BagImg1, bagImages.BagImg2, bagImages.BagImg3, bagImages.BagImg4, bagImages.BagImg5, bagImages.BagImg6]
  },
]

const feederData = [
  {
      id: 2,
      heading: "Baby Philips Feeders",
      deliveryCharges: "Free shipping 07 - 14 nov",
      price:"7,287",
      sale: "194+ sold",
      description: "The PHILIPS AVENT Newborn Baby PPSU Bottles are designed specifically to support the comfort and health of newborns aged 0-6 months and beyond. Made from premium PPSU (polyphenylsulfone) material, these bottles are durable, heat-resistant, and ideal for safe feeding. They feature a unique anti-colic design that reduces discomfort by minimizing air intake. They’re easy to hold, ensuring a comfortable grip for both parents and babies. Plus, the thread-off proof handle adds extra security, preventing leaks or spills.",
      link: "https://s.click.aliexpress.com/e/_omPZBCx",
      images: [feederImages.FeederImg1, feederImages.FeederImg2, feederImages.FeederImg3, feederImages.FeederImg4, feederImages.FeederImg5, feederImages.FeederImg6]
  },
  
]

const feeder2Data = [
  {
      id: 3,
      heading: "Baby Philips Feeders",
      deliveryCharges: "Free shipping 07 - 14 nov",
      price:"9,224",
      sale: "90 sold",
      description: "The PHILIPS AVENT High Boron Silicon Glass Milk Bottle is designed for newborns aged 0 to 6 months, offering durability and safety with high boron silicon glass. Its wide-caliber design allows easy filling and cleaning, making feeding more convenient for parents. The bottle features advanced anti-colic technology, which helps reduce colic, discomfort, and gas by minimizing air intake. Ideal for newborns, this premium glass bottle provides a gentle, safe feeding experience for both baby and parents.",
      link: "https://s.click.aliexpress.com/e/_EyMpn45",
      images: [feeder2Images.Feeder2Img1, feeder2Images.Feeder2Img2, feeder2Images.Feeder2Img3, feeder2Images.Feeder2Img4, feeder2Images.Feeder2Img5]
  },
]

const jacketData = [
  {
      id: 4,
      heading: "Baby girl warm winter soft jacket",
      deliveryCharges: "Free shipping over 2,780 07 - 14 nov",
      price:"2,488",
      sale: "600+ sold",
      description: "Keep your little one cozy and adorable in this Winter Baby Girl Jacket! Designed with sweet rabbit ears and a warm hood, this minimalist wool sweater is perfect for chilly days. Made for babies aged 0-3 years, it combines comfort with cuteness to keep your child snug and stylish all winter long.",
      link: "https://s.click.aliexpress.com/e/_EwX0IWV",
      images: [jacketImages.JacketImg1, jacketImages.JacketImg2, jacketImages.JacketImg3, jacketImages.JacketImg4, jacketImages.JacketImg5]
  },
]

const pajamaData = [
  {
      id: 5,
      heading: "Baby pajama come rompers",
      deliveryCharges: "Free shipping over 2,780 08 - 15 nov",
      price:"2,435",
      sale: "2,000+ sold",
      description: "Cozy and adorable, these Baby Pajamas with a zipper closure are crafted from soft fleece to keep newborns warm and comfortable all winter long. Designed as a one-piece romper, it’s perfect for both baby girls and boys, with a fun truck print that adds a playful touch. Ideal as winter underwear or a standalone outfit, this romper makes dressing easy for parents while providing full-body warmth and comfort for infants.",
      link: "https://s.click.aliexpress.com/e/_mMrmDDq",
      images: [pajamaImages.PajamaImg1, pajamaImages.PajamaImg2, pajamaImages.PajamaImg3, pajamaImages.PajamaImg4, pajamaImages.PajamaImg5, pajamaImages.PajamaImg6]
  }
 
]



function App() {

  useEffect(()=>{
    updateUser()
  }, [])


  const updateUser = async () => {
    try {
      
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/increment`)
        console.log(res);
    } catch (error) {
      console.log(error);
      
    }
      
  }

  return (
    <div className="App">
    
    <Helmet>
        <title>Affiliate Products</title>
    </Helmet>

    <section>
        <Section data={bagData}  />
    </section>
    <section>
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
    </section>
    

    </div>
  );
}

export default App;



