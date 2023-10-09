import { useEffect,useState } from 'react'
import { getAllStarships } from './services/sw-api.js'
import { Route, Routes } from 'react-router-dom'
import Starships from './Component/Starships.jsx'
import './App.css'

function App() {

  const [starships,setStarships]=useState([])
  useEffect(() =>{
    const fetchStarships=async () =>{
      const starshipsData=await getAllStarships()
      setStarships(starshipsData.results)
      console.log(starships)
    }
    fetchStarships()
  },[setStarships])

  return (
    <main className='starships-list'>

<Routes>
  <Route path='/' element={<Starships starships={starships}/>} />
</Routes>

    </main>
  )
}

export default App
