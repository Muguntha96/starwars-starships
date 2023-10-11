import { useEffect,useState } from 'react'
import {getAllStarships} from './services/sw-api.js'
import { Route, Routes } from 'react-router-dom'
import Starships from './Component/Starships/Starships.jsx'
import StarshipDetail from './pages/StarshipDetail/StarshipDetail.jsx'
import './App.css'



function App() {

  const [starships,setStarships]=useState([])
 
  useEffect(() =>{
    const fetchStarships=async () =>{
      const starshipsData=await getAllStarships()
      setStarships(starshipsData.results)
    // console.log(starshipsData)
    }
    fetchStarships()
  },[starships])

 

  return (
    <>
   
<Routes>
  <Route path='/' element={<Starships starships={starships}/>} />
  <Route path='/:starshipId' element={<StarshipDetail />} />
</Routes>

</>
  )
}

export default App
