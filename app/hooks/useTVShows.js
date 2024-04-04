import React,{ useEffect, useState } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL;

export const useTVShows = () => {
    const [tvShows,setTVShows] = useState([]);

    useEffect(()=>{
        fetch(`${url}/tvshows`)
        .then(res=>res.json())
        .then(res=>{
            setTVShows(res.response);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return {tvShows};
}