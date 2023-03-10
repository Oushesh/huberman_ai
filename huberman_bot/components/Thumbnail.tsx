import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
    movie: Movie
}

function Thumbnail({movie}:Props) {
  return (
    <div className="hover:opacity-50 relative h-28 min-w-[180px]">
        <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded"
              layout="fill" alt=""/>
    </div>
  )
}

export default Thumbnail


//add option to autoplay the video.
//each thum
