import React, { Component } from 'react'
import Image from 'next/image'

interface Props {
    netflixoriginals: Movie[],
    trendingNow: Movie[],
    topRated: Movie[],
    actionMovies: Movie[],
    comedyMovies: Movie[],
    horrorMovies: Movie[],
    romanceMovies: Movie[],
    documentaries: Movie[],
}

function Banner(
    {netflixOriginals, 
        trendingNow, 
        topRated, 
        actionMovies, 
        comedyMovies, 
        horrorMovies, 
        romanceMovies, 
        documentaries}:Props}) {
  return(
    <div>
        <div{/*<Image/>*/}</div>     
    </div>
  ) 
}
export default Banner
