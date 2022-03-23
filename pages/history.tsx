import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HistoryComponent from '../components/history-component'


const History = () => {
  return (
   <>
      <Navbar></Navbar>

      <HistoryComponent></HistoryComponent>

      <Footer></Footer>

   </>
  )
}

export default History;