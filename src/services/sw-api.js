const baseUrl='https://swapi.dev/api/starships'

export async function getAllStarships(){
try {
  const res= await fetch (`${baseUrl}`)
  return res.json()
  
} catch (error) {
  console.log(error)
}
}

export async function getShipDetail(shipId){
  try {
    const res= await fetch (`${baseUrl}/${shipId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export async function getPilots(pilotsArr){
  try {
const promises=pilotsArr.map(
  pilot => fetch(pilot)
  .then(res => res.json())
)
const pilotData=await Promise.all(promises)
return pilotData
    
  }catch (error) {
    console.log(error)
  }
}