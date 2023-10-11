const baseUrl='https://swapi.dev'

export async function getAllStarships(){
try {
  const res= await fetch (`${baseUrl}/api/starships`)
  return res.json()
  
} catch (error) {
  console.log(error)
}
}

export async function getShipDetail(starshipId){
  try {
    const res= await fetch(`${baseUrl}/api/starships/${starshipId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}