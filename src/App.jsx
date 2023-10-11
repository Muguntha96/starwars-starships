import { useEffect,useState } from 'react'
import { getAllStarships } from './services/sw-api.js'
import { Route, Routes } from 'react-router-dom'
import Starships from './Component/Starships/Starships.jsx'
import './App.css'
import StarshipDetail from './Component/StarshipDetail/StarshipDetail.jsx'


function App() {

  const [starships,setStarships]=useState([])
  const [syarshipDetail,setStarShipDetail]=useState({})
  useEffect(() =>{
    const fetchStarships=async () =>{
      const starshipsData=await getAllStarships()
      setStarships(starshipsData.results)
    
    }
    fetchStarships()
  },[starships])

  useEffect( () =>{
    
  })

  return (
    <main className='starships-list'>

<Routes>
  <Route path='/' element={<Starships starships={starships}/>} />
  <Route path='/:starshipId' element={<StarshipDetail />} />
</Routes>

    </main>
  )
}

export default App
