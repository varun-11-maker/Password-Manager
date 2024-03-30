import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontaier flex justify-between items-center px-4 py-5 h-14">
            <div className="logo font-bold text-2xl">
                <span className='text-green-700'>&lt;</span>
                    Pass
                <span className='text-green-700'>OP/&gt;</span>
            </div>
            {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="">Home</a>
                    <a className='hover:font-bold' href="">About</a>
                    <a className='hover:font-bold' href="">Contact</a>
                </li>
            </ul> */}
            <button className='flex gap-3 justify-between items-center text-white bg-green-700 rounded-full p-2 '>
                <img className="invert"src="icons/github.svg" alt="" />
                <span className='font-bold'>Github</span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar