import React, {useState} from "react";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contact , setContact ] =useState({name:'',phoneNr:'',email:''})
  
  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]:e.target.value
    })
  }

  let succes=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   console.log("a")
    if(succes){
      console.log("B")
      props.addContact({contact})
      setContact({
        name:'',
        phoneNr:'',
        email:''
      });
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" value={contact.name} onChange={handleInputChange} id="name" name="name"/><br/>
          <label htmlFor="phoneNr">Phone number:</label><br/>
          <input type="text" value={contact.phoneNr} onChange={handleInputChange} id="phoneNr" name="phoneNr"/><br/>
          <label htmlFor="email">Email:</label><br/>
          <input type="text" value={contact.email} onChange={handleInputChange} id="email" name="email"/><br/>

          <input type="submit" value="Submit"/>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
