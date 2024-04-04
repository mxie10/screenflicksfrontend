import React,{ useEffect, useState } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL;

export const useFeaturedMovies = () => {
    const [featuredMovies,setFeaturedMoviea] = useState([]);

    useEffect(()=>{
        fetch(`${url}/movies/featured/movie`)
        .then(res=>res.json())
        .then(res=>{
            setFeaturedMoviea(res.response);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {featuredMovies};
}