import { useState, useEffect } from 'react'
import Loading from './components/Loading.jsx'
import ToursList from './components/ToursList.jsx'
import NoTours from './components/NoTours.jsx'

export default function App() {
  // TODO: Set state loading and tours

  

  // TODO: Remove Tour by id and set the new state 
  function removeTour(id){

  }

  // TODO: Get Tours data from json 
  async function fetchTours(){
    
  }

  useEffect(() => {
    fetchTours()
  }, []);

  return (
    <main>
      {/* TODO: Show loading component or NoTours component (if there are not  
      tours in the loaded list) or Tours List  */}
    </main>
  )
}