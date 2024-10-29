import './App.css';
// import {AuroraHero} from '../src/components/Hero'
import Header from '../src/components/Header'
import { Helmet } from 'react-helmet';
import Swiper from '../src/components/Swiper';
import React  from 'react'


function App() {
   

  return (
    <div className="App">
    
    <Helmet>
        <title>Affiliate Products</title>
    </Helmet>

    <section>
        <Header/>
    </section>
    
    <section>
        <Swiper  />
    </section>
    

    </div>
  );
}

export default App;



