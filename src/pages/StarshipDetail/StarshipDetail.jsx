import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShipDetail } from '../../services/sw-api'
import ShipDetail from '../../Component/ShipDetail/ShipDetail.jsx'
const StarshipDetail = () => {
  const {starshipId}=useParams()
  const [starshipDetails,setStarShipDetails]=useState({})
  useEffect( () =>{
    const fetchStarshipDetails= async () =>{
      const starshipData= await getShipDetail(starshipId)
      setStarShipDetails(starshipData)
    }
    fetchStarshipDetails()
  })
  if(!starshipDetails.name)return <h2>Loading</h2>
  return ( 
  //  <ShipDetail />
 

<>
<ShipDetail starshipDetails={starshipDetails} />
</>
   )
}
 
export default StarshipDetail;