import { useEffect, useState } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL;

export const useHeros = () => {
    const [heros, setHeros] = useState([]);

    useEffect(()=>{
        fetch(`${url}/heros`)
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