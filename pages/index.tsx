import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExpenseMenu from '../components/expense-menu'
import Navbar from '../components/navbar'
import Showcase from '../components/showcase'
import LoginContent from '../components/login-content'
import Footer from '../components/footer'
import { useContext } from 'react'
import { UserContext } from '../lib/context'



const Home: NextPage = () => {
  const { user, username } = useContext(UserContext)
  console.log(username)

  return (
    <>

      {
        !username && (
          <>
            <LoginContent></LoginContent>

            <Footer></Footer>
          </>
        )
      }

      {
        username && (
          <>
            <Navbar></Navbar>

            <Showcase></Showcase>

            <ExpenseMenu></ExpenseMenu>


          </>

        )
      }

    </>
  )
}

export default Home;
