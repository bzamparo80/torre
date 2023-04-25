import {useState} from 'react'
import logoTorre from "../Images/logoTorre.png"
import { FiMenu } from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <header className="py-2 bg-graytorre">
          <div className="flex items-center max-w-full xl:mx-auto xl:max-width-7xl px-[8%] flex-wrap w-full">
            <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={() => setOpen(!open)} />
            <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
              <ul className="lg:flex lg:justify-between text-base text-gray-600">
                <li>
                  <a className="lg:px-5 py-2 font-semibold hover:text-blue-700" href="#">Home</a>
                </li>
                <li>
                  <a className="lg:px-5 py-2 font-semibold hover:text-blue-700" href="#">About Us</a>
                </li>
                <li>
                  <a className="lg:px-5 py-2 font-semibold hover:text-blue-700" href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <img className="p-1 h-14" src={logoTorre} alt="logo" /> 
            <div className="flex">
            <a className="text-2xl text-white" href="https://torre.co/search"><AiOutlineSearch/></a>
            <button className= "text-greentorre">SING IN</button>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar