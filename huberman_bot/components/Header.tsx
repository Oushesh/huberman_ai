import React from 'react'

function Header() {
  return (
    <header>
    <div className="flex items-center space-x-2 md:spacing-x-10">
       <img
        src="https://rb.gy/ulxxee"
        width={100}
        height={100}
        className="cursor-pointer object-contain"
        />

        <u1 className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">Tv Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List </li>    
        </u1>
    </div>
    <div>
    </div>
    </header>
  )
}

export default Header

//Header has 2 sides left and right. Lefr for image and right for text.