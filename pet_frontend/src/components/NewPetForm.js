import { useState } from "react";


const NewPetForm = ({pets, postPet}) => {
  
  const [statePet, setStatePet] = useState(
      {
          name : "",
          type : "",
          breed : "",
          age : "",
      }
  )

  const handleChange = (event) => {
    console.log(event);
    let propertyName = event.target.name;
    let copiedPet = {...statePet};
    copiedPet[propertyName] = event.target.value;
    setStatePet(copiedPet);
  }

  const handleFormSubmit = (event) => {
      event.preventDefault();
      postPet(statePet);
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <h4>Put a pet up for adoption</h4>

      <label for="name">Name</label>
      <input type="text" name="name" onChange={handleChange} value={statePet.name} id="name"/>

      <label for="type">Type</label>
      <input type="text" name="type" onChange={handleChange} value={statePet.type} id="type"/>
      
      <label for="breed">Breed</label>
      <input type="text" name="breed" onChange={handleChange} value={statePet.breed} id="breed"/>

      <label for="age">Age</label>
      <input type="text" name="age" onChange={handleChange} value={statePet.age} id="age"/>

      <button>Submit</button>
    </form>
  )
}

export default NewPetForm;