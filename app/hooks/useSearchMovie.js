import React, { useEffect, useState } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL;

export const useSearchMovies = (params) => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        fetch(`${url}/search?params=${params}`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.response);
            }).catch(err => {
                console.log(err);
            })
    }, [params]);

    return { searchResult };
}