import React from 'react'

import Layout from '../../components/layout'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Feature from '../../components/feature'
import About from '../../components/about'
import Model from '../../components/model'
import Services from '../../components/services'
import LowerBackground from '../../components/lower-banner'
import Gallery from '../../components/gallery'
import Reviews from '../../components/reviews'
import Footer from '../../components/footer'

const Home = () => (
 <Layout>
   <Header/>
   <Intro/>
   <Feature/>
   <About/>
   <Model/>
   <Services/>
   <LowerBackground/>
   <Gallery/>
   <Reviews/>
   <Footer/>
 </Layout>
)

export default Home
