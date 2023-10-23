import React from 'react'
import { useValue } from '../../CustomContext'
import Recipe_Card from '../Recipe_Card/Recipe_Card'

const Fav_Recipe = () => {
  const { favRecipes, setFavRecipes } = useValue()

  const handleReset = ()=>{
    setFavRecipes([])
    localStorage.setItem("fav-recipes", "[]" )
  }

  
  return (
    <div className='container m-auto'>

      <h1 className='text-center font-bold text-4xl mt-5 text-red-500'>Favourite Recipes</h1>

      <button className='bg-black text-white p-2 rounded-xl' onClick={handleReset}>Reset</button>

      {favRecipes?
      <div className='flex items-center justify-between flex-wrap mb-3'>
      {favRecipes?.map((r) => (
        <Recipe_Card label={r.label} thumb={r.image} type={r.cuisineType[0]} uri={r.uri} />
      ))}
    </div> 
    :
    <h1 className='text-center font-bold text-red-500'>No Favourite Recipes Yet!!</h1> }

      
    </div>
  )
}




export default Fav_Recipe