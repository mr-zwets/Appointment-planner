import React from "react";

export const ContactPicker = (props) => {
const id=props.id
const contacts=props.contacts
const handleInputChange= (e) => props.handleInputChange(e)

  return (
    <select id={id} onChange={handleInputChange}>
      <option value="Unselected">Unselected</option>
      {
        contacts.map(contact => 
          (<option value={contact.name}>{contact.name}</option>)
        )
      }
    </select>
  );
};
