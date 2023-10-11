import { Link } from "react-router-dom";
import './ShipDetail.css'
const ShipDetail = ({starshipDetails,pilots,isLoadingPilotData}) => {
  return (
 <div className="shipdetail">

 <h3>NAME :{starshipDetails.name}</h3>
 <h3>MODEL :{starshipDetails.model}</h3>
 <ul>PILOTS :
 {pilots.length ?
  pilots.map(pilot => 
    <li key={pilot.name}>{pilot.name.toLowerCase()}</li>
    )
    :
    <>
    {isLoadingPilotData ?
      <h3>no pilots for this ship!</h3>
      :
      <h3>loading pilots...</h3>
    }
  </>
 }
 </ul>
<Link to='/'><button>Return</button></Link>
</div>
    )
}
 
export default ShipDetail;