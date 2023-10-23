import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useValue } from '../../CustomContext'

import { useNavigate } from 'react-router-dom'

const Recipe_Detail = () => {
  const [toggleButton, setToggleButton] = useState(false)
  const [recipe, setRecipe] = useState("")
  const [loading, setLoading] = useState(true)

  const { favRecipes, setFavRecipes, setError } = useValue()
  const { id } = useParams()
  const navigate = useNavigate()

  // fetch recipe by id
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`



  // add recipe to fav
  const addToFav = (recipe, id) => {
    const updatedFavRecipes = [...favRecipes, {id, ...recipe}]
    setFavRecipes((prev) => [...prev, { id, ...recipe }])

    // add to local storage
    localStorage.setItem("fav-recipes", JSON.stringify(updatedFavRecipes) )

    setToggleButton(true)
  }

  // remove recipe from fav
  const removeFromFav = (id) => {
    const filtered = favRecipes.filter((i) => i.id !== id)
    setFavRecipes(filtered)

    //remove from local storage
    localStorage.setItem("fav-recipes", filtered )

    setToggleButton(false)

  }

  // fetch recipe detailed
  const fetchRecipe = async () => {
    try{
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
    }
    setRecipe(data.recipe)
    console.log(data)
  }
    catch (e) {
      console.log(e)
      setError(e.message)
      navigate("/error")
      
    }
  }

  // fetch at intial render
  useEffect(() => {
      fetchRecipe()
  }, [])

  // toggle add and remove button whenever button pressed
  useEffect(() => {
    const index = favRecipes.findIndex((i) => i.id === id)
    console.log(index)
    if (index === -1) {
      setToggleButton(false)
    }
    else {
      setToggleButton(true)
    }
  }, [toggleButton])

  console.log(id)
  return (

    <div className='container m-auto'>
      {loading ? "Loading" :

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <img src={recipe.image} alt={""} className="w-96 h-auto rounded-lg m-auto" />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">{recipe.label}</h2>

            <h1 className='mb-2 text-zinc-500'>{recipe.cuisineType[0]}</h1>

            {toggleButton ?
              <button className='text-white bg-red-800 rounded-xl p-2 font-bold' onClick={() => removeFromFav(id)}>
                Remove from Favourites
              </button>
              :
              <button className='text-white bg-green-800 rounded-xl p-2 font-bold' onClick={() => addToFav(recipe, id)}>
                Add to Favourites
              </button>}

            <div className="text-gray-700">
              <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
              <ul>
                {recipe.ingredientLines?.map((ingredient, index) => (
                  <li key={index} className="mb-2">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default Recipe_Detail