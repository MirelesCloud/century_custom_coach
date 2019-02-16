import React from 'react'

import Layout from '../../components/layout'
import Intro from '../../components/intro'
import About from '../../components/about'
import Services from '../../components/services'
import Gallery from '../../components/gallery'
import Reviews from '../../components/reviews'
import Contact from '../contact'


const Home = () => (
  <Layout>
    <Intro/>
    <About/>
    <Services/>
    <Gallery/>
    <Reviews/>
    <Contact/>
  </Layout>
)

export default Home
