import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useValue } from '../../CustomContext'


const Navbar = () => {
  const { searchText, setSearchText } = useValue()
  return (
    <div>
      <header className='sticky z-50 top-0 w-full h-16 bg-white flex items-center justify-around text-black
           font-bold shadow-lg sm:text-base text-sm'>
         <NavLink to={"/"} className=' font-bold sm:text-3xl text-xl text-amber-500'>FindRecipe</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/fav-recipes"}>Favourites</NavLink>
        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} name="" id="" placeholder='Search Recipe'
          className=' md:w-80 w-32 h-10  text-slate-600 p-3 rounded-lg bg-slate-100 font-medium sm:w-40' />
      </header>
      <Outlet />
    </div>
  )
}

export default Navbar