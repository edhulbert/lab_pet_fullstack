import Pet from "./Pet";

const PetList = ({pets, adoptPet}) => {
  
  const petComponents = pets.map(pet => {
    return(
      <Pet
        key={pet.id}
        pet={pet}
        adoptPet={adoptPet}/>
    )
  })

  return(
    <>
      <h3>Friends looking for a forever home</h3>
      <ul>
          {petComponents}
      </ul>
    </>
  )
}

export default PetList;