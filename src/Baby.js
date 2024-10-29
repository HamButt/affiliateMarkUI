import React from 'react'
import Header from './components/Header'
import { Helmet } from 'react-helmet';
import Swiper from './components/Swiper';



function Baby() {
  

  return (
    <div className="App">
    
    <Helmet>
        <title>Baby collection</title>
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

export default Baby