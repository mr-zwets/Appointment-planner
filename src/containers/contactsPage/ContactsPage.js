import React, {useState, useEffect} from "react";
import {TileList} from '../../components/tileList/TileList.js'

export const ContactsPage = (props) => {
  
  // State variables new contact
  const [newContact , setNewContact ] =useState({name:'',phoneNr:'',email:''})
  const [isNameUnique , setIsNameUnique ] =useState(true)
  
  const handleInputChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.id]:e.target.value
    })
  }

  // Clears form and adds new contact to list on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isNameUnique){
      props.addContact(newContact)
      setNewContact({name:'', phoneNr:'', email:''});
    }
  };

  // Check if the new contact's name is unique
  useEffect(()=>{
   props.contacts.find(contact =>contact.name==newContact.name)|| ''==newContact.name? 
    setIsNameUnique(false):setIsNameUnique(true)
  },[newContact])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" value={newContact.name} onChange={handleInputChange} id="name"/><br/>
          <label htmlFor="phoneNr">Phone number:</label><br/>
          <input type="number" value={newContact.phoneNr} onChange={handleInputChange} id="phoneNr"/><br/>
          <label htmlFor="email">Email:</label><br/>
          <input type="text" value={newContact.email} onChange={handleInputChange} id="email"/><br/>

          <input type="submit" value="Submit"/>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
