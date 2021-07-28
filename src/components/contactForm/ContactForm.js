import React from "react";

export const ContactForm = (props) => {

  const handleInputChange= (e) => props.handleInputChange(e)
  const handleSubmit= (e) => props.handleSubmit(e)
  const newContact= props.newContact
  const isNameUnique=props.isNameUnique

  return (
    <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: {isNameUnique? '':' (must be unique)'}</label><br/>
          <input type="text" value={newContact.name} onChange={handleInputChange} id="name"/><br/>

          <label htmlFor="phoneNr">Phone number:</label><br/>
          <input type="text" pattern={"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"} placeholder="###-###-####"
            value={newContact.phoneNr} onChange={handleInputChange} id="phoneNr"/><br/>
            
          <label htmlFor="email">Email:</label><br/>
          <input type="text" value={newContact.email} onChange={handleInputChange} id="email"/><br/>

          <input type="submit" value="Add Contact"/>
        </form>
  );
};
