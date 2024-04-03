import React,{ useEffect, useState } from 'react'

export const useTVShows = () => {
    const [tvShows,setTVShows] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/tvShows')
        .then(res=>res.json())
        .then(data=>{
            setTVShows(data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {tvShows};
}