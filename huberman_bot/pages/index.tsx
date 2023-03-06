import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import Banner from '../components/Banner';
import requests from '../utils/requests'
//interface has the advantage of being able to be reused in other places

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  products: Product[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, 
  trendingNow,
  topRated,
  products,
}:Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]flex min-h-screen flex-col items-center justiy-center py-2">
       <Head> 
        <title>
          Huberman Bot
        </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
   
      <main>
        <Banner/>
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

//Server Side Rendering. Why?
export const getServerSideProps = async () => {

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  }
}