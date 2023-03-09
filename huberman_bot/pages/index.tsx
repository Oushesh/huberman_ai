import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import Banner from '../components/Banner';
import requests from '../utils/requests';
import Row from '../components/Row';
import { SearchCircleIcon, SearchIcon } from '@heroicons/react/solid'
import Link  from 'next/link'
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
      <main className="relative pl-4 pb-4 lg:space-y-24 lg:pl-16">
        <Banner/>
        {/*Banner*/}
        <section>
          <Row title="Trending Youtuber" movies={trendingNow} />
          <Row title="Top Rated Videos" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies}/>
          <Row title="Comedies" movies={comedyMovies}/>
          <Row title="ScaryMovies" movies={horrorMovies}/>
          <Row title="Romance Movies" movies={romanceMovies}/>
          <Row title="Documentaries" movies={documentaries}/>
        </section>

        <section className="flex space-x-2 justify-left">
        <div className='flex items-center space-x-4 text-sm font-light'>
          <h3/>
            Results
          <SearchIcon className="hidden h-6 w-6 sm:inline"/>
          <p className="hidden lg_inline">Search</p>
          <SearchIcon className="h-6 w-6"/>
          <p> This project will be adapted for users or subscribers of a given youtuber to search through videos where a particular information was said</p>
          <p> Oushesh Haradhun CopyRights Reserved 2023 </p>
          </div>
        </section>
      </main>
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

//Youtube Videos





