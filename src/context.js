import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=16b59cb0`
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const API = `https://www.omdbapi.com/?apikey=16b59cb0`
  // const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
  const [value,setValue] =useState('friends')
  const [data,setData] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(true)
  const fetchData = async()=>{
    setLoading(true)
    let url;
    const searchPoint = `&s=${value}`
    url = `${API}${searchPoint}`
    try{
      const res = await fetch(url)
      const data = await res.json()
      if(data.Response === 'False'){
        setError(true)
      }
      else{
        setError(false)
        setData(data.Search)
      }
    }
    catch (err){
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[value])
  const handleChange=(e)=>{
    e.preventDefault()
    const newValue = e.target.value
    setValue(newValue)
  }
  return <AppContext.Provider 
  value={{
    value,
    data,
    handleChange,error,loading,setLoading
  }}
  >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
