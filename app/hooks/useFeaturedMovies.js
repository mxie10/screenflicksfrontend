import React,{ useEffect, useState } from 'react'

export const useFeaturedMovies = () => {
    const [featuredMovies,setFeaturedMoviea] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/featuredMovie')
        .then(res=>res.json())
        .then(data=>{
            setFeaturedMoviea(data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {featuredMovies};
}