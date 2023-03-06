import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'


//interface has the advantage of being able to be reused in other places
interface Inputs {
  email: string
  password: string
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justiy-center py-2">
       <Head>
        <title>
          Huberman Bot
        </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
   
      <main>
        {/*Banner*/}
        <section>
        {/*Rows*/}
        {/*Rows*/}
        {/*Rows*/}
        {/*Rows*/}
        </section>
      </main>
      {/*model*/}
    </div>
  )
}

export default Home