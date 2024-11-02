import React from 'react'
import Header from './components/Header'
import { Helmet } from 'react-helmet';
import Swiper from './components/Swiper';



function Hoodies() {
  

  return (
    <div className="App">
    
    <Helmet>
        <title>Hoodies</title>
    </Helmet>

    <section>
        <Header/>
    </section>
    
    <section >
      <Swiper/>
    </section>

    </div>
  )
}

export default Hoodies