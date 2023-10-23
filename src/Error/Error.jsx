import React, { useEffect } from 'react'
import { useValue } from '../CustomContext'

import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const {error, setError, setSearchText} = useValue()

    const tryAgain = ()=>{
        setError(null)
        setSearchText("")
        navigate("/")
    }

    
  return (
    <>
    {error?
    <div className='container m-auto w-full flex flex-col justify-center'>
              <h1 className=' font-bold text-center mt-20 text-6xl'>{error} </h1>
              <button className='m-auto font-bold p-2 text-white bg-yellow-400 mt-5 text-xl' onClick={tryAgain}>Try Again</button>
    </div>
    :
    "No ERROR"}

    </>
    
  )
}

export default Error