import React, { useEffect } from 'react'
import { useValue } from '../../CustomContext'
import Recipe_Card from '../Recipe_Card/Recipe_Card';

import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { searchText, data, setData, setError } = useValue()
    const navigate = useNavigate()
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchText}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

    const fetchRecipes = async () => {
        try{
            const response = await fetch(url, {
                method: "GET"
            })
            const data = await response.json()
            setData(data)
            console.log(data)
            setError(null)
        }
        catch(e) {
            console.log(e)
            setError(e.message)
            navigate("/error")
        }
        
    }

    useEffect(() => {
        fetchRecipes()
    }, [searchText])


    return (
        <div className='container m-auto flex  flex-wrap justify-around gap-2'>

            {(data.count == 0 ?
                <h1 className=' font-bold text-4xl text-center mt-10'>Whats on your mind?</h1>
                :
                data.hits?.map((r) => (
                    <Recipe_Card label={r.recipe.label} thumb={r.recipe.image} type={r.recipe.cuisineType[0]} uri={r.recipe.uri} />
                )))
            }
        </div>
    )
}

export default Home