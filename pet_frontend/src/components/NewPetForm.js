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
    <>
    <h4>Put a pet up for adoption</h4>
    <form onSubmit={handleFormSubmit}>
      <section class="input-fields">
        <section class="input-field">
            <label for="name">Name</label>
            <input type="text" name="name" onChange={handleChange} value={statePet.name} id="name"/>
        </section>
        <section class="input-field">
            <label for="type">Type</label>
            <input type="text" name="type" onChange={handleChange} value={statePet.type} id="type"/>
        </section>        
        <section class="input-field">
            <label for="breed">Breed</label>
            <input type="text" name="breed" onChange={handleChange} value={statePet.breed} id="breed"/>
        </section>
        <section class="input-field">
            <label for="age">Age</label>
            <input type="text" name="age" onChange={handleChange} value={statePet.age} id="age"/>
        </section> 
      </section>
      <button>Submit</button>
    </form>
    </> 
  )
}

export default NewPetForm;