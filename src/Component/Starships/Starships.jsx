import { Link } from 'react-router-dom'
import './Starships.css'
const Starships = (props) => {
  return (
    <>
      <h1>StarWars Starships</h1>
      <div id='main'>
        {props.starships.map(starship =>
          <div className='starships' key={starship.name}>
            <Link to={`/${starship.url.match(/\d+/)}`}>{starship.name.toLowerCase()}</Link>
          </div>)}
      </div>
    </>
  )
}
export default Starships 