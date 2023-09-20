import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([])
  const [search, setSearch] = useState("")
  const filteredPlants= plants.filter(plant =>{
    return plant.name.toLowerCase().includes(
      search.toLowerCase()
    )
  })
  useEffect(()=>{
    fetch(" http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plants)=>setPlants(plants))
    console.log(plants)
  },[])
 

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
