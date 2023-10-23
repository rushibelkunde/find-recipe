import { createContext, useContext, useEffect, useState } from "react";

const InputContext = createContext()

// custom hook to get all the states defined in context across all components
export const useValue = ()=> {
    return useContext(InputContext)
}

// CustomContext
export const CustomContext = ({children})=>{

    const [searchText, setSearchText] = useState("")
    const [data, setData] = useState({}) //api response data
    const [favRecipes, setFavRecipes] = useState([])
    const [error, setError] = useState("")


    //Local storage set up
    useEffect(()=>{
        if(!localStorage.getItem("fav-recipes")){
            localStorage.setItem("fav-recipes", JSON.stringify(favRecipes))
        }
        else{
            const localFavRecipes = JSON.parse(localStorage.getItem("fav-recipes"))
            setFavRecipes(localFavRecipes)
        }
    },[])

    

    return(
        <InputContext.Provider value={{searchText, setSearchText, data, setData, favRecipes, setFavRecipes, error, setError}}>
            {children}
        </InputContext.Provider>
    )
}

