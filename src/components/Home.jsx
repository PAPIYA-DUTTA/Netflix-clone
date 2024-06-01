import React from 'react'
import Hero from '../components1/Hero';
import MovieRow from '../components1/MovieRow';
import endpoints from '../services/movieServices';




const Home = () => {
  return (
    <> 
    
    <Hero />
    
    <MovieRow title="upcoming" url={endpoints.upcoming} />
    <MovieRow  title="trending" url={endpoints.trending}/>
    <MovieRow title="top rated" url={endpoints.topRated} />
    <MovieRow title="comedy" url={endpoints.comedy} />
    <MovieRow title="popular" url={endpoints.popular}/>
    

    </>
  )
}

export default Home