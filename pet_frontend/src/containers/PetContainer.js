import PetList from "../components/PetList";
import NewPetForm from "../components/NewPetForm";
import { useState, useEffect } from "react";

const PetContainer = () => {
    
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pets')
      .then(response => response.json())
      .then(data => setPets(data))
  })

  const adoptPet = (id) => {
    fetch('http://localhost:8080/pets/' + id, 
    {
      method : 'DELETE',
      headers : {"Content-Type": "application/json"}
    })
    setPets(pets.filter(pet => pet.id !== id))
  }

  const postPet = (newPet) => {
    fetch('http://localhost:8080/pets',
    {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(newPet)
    })
  }

  return(

    <>
    <h1>Pet Adoption</h1>
    <p>someone please helps these fellas</p>
    <hr/>
    <NewPetForm postPet={postPet}/>
    <hr/>
    <PetList pets={pets} adoptPet={adoptPet}/>
    </>

  )
}

export default PetContainer;