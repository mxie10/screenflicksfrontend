import React,{ useEffect, useState } from 'react'

export const useMovies = () => {
    const [movies,setMoviea] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(res=>res.json())
        .then(data=>{
            setMoviea(data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {movies};
}