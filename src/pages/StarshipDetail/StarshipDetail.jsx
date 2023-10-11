import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShipDetail,getPilots } from '../../services/sw-api'
import ShipDetail from '../../Component/ShipDetail/ShipDetail.jsx'
const StarshipDetail = () => {
  const {starshipId}=useParams()
  const [starshipDetails,setStarShipDetails]=useState({})
  const [isLoadingPilotData, setIsLoadingPilotData] = useState(true)
  const [pilots,setPilots]=useState([])
  useEffect( () =>{
    const fetchStarshipDetails= async () =>{
      const starshipData= await getShipDetail(starshipId)
      setStarShipDetails(starshipData)
      if(starshipData.pilots.length){
        const fetchPilot= async () =>{
          const pilotData= await getPilots(starshipData.pilots)
          setPilots(pilotData)
          setIsLoadingPilotData(false)
        }
        fetchPilot()
      }
    
    }
    fetchStarshipDetails()
  })
  if(!starshipDetails.name)return <h2>Loading</h2>
  return ( 
  //  <ShipDetail />
 

<>
<ShipDetail 
pilots={pilots}
isLoadingPilotData={isLoadingPilotData}
starshipDetails={starshipDetails} />
</>
   )
}
 
export default StarshipDetail;