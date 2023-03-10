import { InformationCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
//import { modalState, movieState } from '../atoms/modalAtom.'
//import { useRecoilState } from 'recoil'
import Image from 'next/image'

//interface has the advantage of being able to be reused in other places

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  //const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  //const [showModal, setShowModal] = useRecoilState(modalState)
    /*
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  */

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          objectFit='cover'
          src="https://www.themoviedb.org/t/p/original/pev79DpUojF5qaWwedoEa2LT31i.jpg"
          alt=""
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
        Batman Returns
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        Hey Batman, how is it going 
      </p>

      <div className="flex space-x-3 justify-left">
        <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h.7 md:w-7"/> Play </button>
        <button className="bannerButton bg-[gray]/70"> 
        More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>
        </button>
      </div>   

    </div>
  )
}

export default Banner

//you can write custom css and add it under
//className in Tailwind css
//icons from herokicons, react-icons.
//Custom tech shadow I use test-shadow npm:
//npm i tailwindcss-textshadow