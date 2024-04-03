import React,{ useEffect, useState } from 'react'

export const useHeros = () => {
    const [heros, setHeros] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/heroSection')
        .then(res=>res.json())
        .then(data=>{
            setHeros(data);
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    return { heros };
}