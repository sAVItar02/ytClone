import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_BY_KEYWORD } from '../utils/constants';

const SearchPage = () => {
    const [searchQuery] = useSearchParams();

    useEffect(() => {
        getSearchResults();
    }, [])
    
    const getSearchResults = async () => {
        let data = await fetch(SEARCH_BY_KEYWORD + searchQuery.get("search-query"));
        let json = await data.json();
        console.log(json);
    } 

  return (
    <div>
        Search Page
    </div>
  )
}

export default SearchPage