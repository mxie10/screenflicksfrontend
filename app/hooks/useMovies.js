import React,{ useEffect, useState } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL;

export const useMovies = () => {
    const [movies,setMoviea] = useState([]);

    useEffect(()=>{
        fetch(`${url}/movies`)
        .then(res=>res.json())
        .then(res=>{
            setMoviea(res.response);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {movies};
}