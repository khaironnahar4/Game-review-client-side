import { useState } from "react"
import { Link } from "react-router-dom"


function Hero() {
  const [theme, setTheme] = useState("light")
  return (
    <div
    className="hero overflow-hidden w-full object-cover min-h-screen"
    style={{
      // width: '105%',
      backgroundImage: "url(https://w0.peakpx.com/wallpaper/968/967/HD-wallpaper-the-best-gaming-beautiful-collection-background-gaming-for-laptop-good-gaming.jpg)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <p>Game review website</p>
        <h1 className="mb-5 text-5xl font-bold">GameVerse</h1>
        <p className="mb-5">
            Dive into the World of Reviews
        </p>
        <Link to={'/all-reviews'} className="btn btn-primary">Explore Details</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero