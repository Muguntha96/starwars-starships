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