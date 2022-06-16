

const Pet = ({pet, adoptPet}) => {
  
  const handleAdoptPet = () => {
    adoptPet(pet.id)
  }

  return(
    <li>
      <h4>{pet.name}</h4> 
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years old</p>
      <button onClick={handleAdoptPet}>Adopt</button>
    </li>
  )
}

export default Pet;