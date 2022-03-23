import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TrackComponent from '../components/track-component'


const Track = () => {
  return (
   <>
      <Navbar></Navbar>

      <TrackComponent></TrackComponent>

      <Footer></Footer>

   </>
  )
}

export default Track;