import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {value,handleChange,error} = useGlobalContext()
  return <form className="search-form">
    <h2>Search movies</h2>
    <input type="text" className="form-input" value={value} onChange={handleChange}/>
    {error && <div className="error">too many results</div>}
  </form>
}

export default SearchForm
