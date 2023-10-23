import React from 'react'
import { useNavigate } from 'react-router-dom'


const Recipe_Card = ({ thumb, label, type, uri }) => {
    const navigate = useNavigate()

    const handleRecipeClick = () => {
        var parts = uri.split('#');
        if (parts.length > 1) {
            var id = parts[1];
            navigate(`/recipe-detail/${id}`)
        } else {
            console.log("URL does not contain a fragment identifier.");
        }
    }

    return (
        <div className=' sm:w-52  w-40  mt-4 bg-slate-50  flex flex-col text-zinc-900 rounded-2xl cursor-pointer'
            onClick={() => handleRecipeClick()}>
            <div className=' overflow-hidden'>
                <img src={thumb} alt="" className=' w-52 h-36 object-cover rounded-2xl hover:scale-150 duration-700' />
            </div>
            <h1 className='p-1 text-md text-left font-medium'>{label}</h1>
            <h1 className='px-1 pb-1 text-zinc-500  text-left font-normal text-sm'>{type}</h1>
        </div>
    )
}

export default Recipe_Card