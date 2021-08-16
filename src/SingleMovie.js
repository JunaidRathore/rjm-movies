import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT, useGlobalContext } from './context'

const SingleMovie = () => {
  const {loading,setLoading} = useGlobalContext()
  const [data,setData] = useState({})
  const { id } = useParams()
  console.log(id)
  const searchID = `&i=${id}`
  const url = `${API_ENDPOINT}${searchID}`
  console.log(url)
  const fetchData = async()=>{
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    setLoading(false)
    console.log(data)
  } 
  useState(()=>{
    fetchData()
  },[id])
  const {Title,Poster,Plot} = data 
  if(loading){
    return <div className='loading'></div>
  }
  return <section className="single-movie">
    <img src={Poster} alt={Title} />
    <div className="single-movie-info">
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <Link className="btn" to="/">back to movies</Link>
    </div>
  </section>
}

export default SingleMovie
