import React from 'react'

import Layout from '../../components/layout'
import Header from '../../components/header'
import Feature from '../../components/feature'
import About from '../../components/about'
import Model from '../../components/model'
import Services from '../../components/services'
import LowerBackground from '../../components/lower-banner'
import Gallery from '../../components/gallery'
import Reviews from '../../components/reviews'
import LastBanner from '../../components/final-banner'
import Footer from '../../components/footer'
import MirelesCloud from '../../components/mirelescloud'

const Home = () => (
 <Layout>
   <Header/>
   <Feature/>
   <About/>
   <Model/>
   <Services/>
   <LowerBackground/>
   <Gallery/>
   <Reviews/>
   <LastBanner/>
   <Footer/>
   <MirelesCloud/>
 </Layout>
)

export default Home
