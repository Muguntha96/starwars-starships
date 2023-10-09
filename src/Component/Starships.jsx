import './Starships.css'
const Starships = (props) => {
  return ( 
 <div>
    <h1>StarWars Starships</h1>
 
 {props.starships.map(starship =>
    <div className='starships' key={starship.name}> { starship.name}</div> )}
 
   
 </div>
  )}
 
export default Starships