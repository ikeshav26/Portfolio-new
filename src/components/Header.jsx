import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { useTheme } from './context/ThemeProvider'

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <div className='z-50 fixed top-0 left-0 w-full'>
        <div className="flex justify-between px-5 pt-5">
          <div className="flex gap-2 text-3xl dark:text-white">
            <Link
              to="https://www.instagram.com/keshav_gilhotra_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-neutral-800 p-2 rounded-xl hover:scale-105 hover:bg-neutral-700 transition-all"
            >
              <AiFillInstagram />
            </Link>
            <Link
              to="https://github.com/ikeshav26"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-neutral-800 p-2 rounded-xl hover:scale-105 transition-all hover:bg-neutral-700"
            >
              <AiFillGithub />
            </Link>
            <Link
              to="https://x.com/KeshavGilh5995"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-neutral-800 p-2 rounded-xl hover:scale-105 transition-all hover:bg-neutral-700"
            >
              <AiFillTwitterCircle />
            </Link>
          </div>
          <div className="flex items-center dark:text-white justify-center gap-2 dark:bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 hover:scale-105 transition-all">
            <label className="swap swap-rotate">
              <input
                onChange={() => {
                  const newTheme = theme === "light" ? "dark" : "light";
                  setTheme(newTheme);
                }}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>


              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
