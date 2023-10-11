import { Link } from "react-router-dom";
import './ShipDetail.css'
const ShipDetail = ({starshipDetails}) => {
  return (
 <div className="shipdetail">

 <h3>Name :{starshipDetails.name}</h3>
 <h3>Model :{starshipDetails.model}</h3>
<Link to='/'><button>Return</button></Link>
</div>
    )
}
 
export default ShipDetail;