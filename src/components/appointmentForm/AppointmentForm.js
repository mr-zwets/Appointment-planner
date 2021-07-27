import React, {useEffect} from "react";

export const AppointmentForm = (props) => {
  
  const handleInputChange= (e) => props.handleInputChange(e)
  const handleSubmit= (e) => props.handleSubmit(e)
  const newAppointment= props.newAppointment
  const setNewAppointment= props.setNewAppointment

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(()=>{
    setNewAppointment({
      ...newAppointment,
      date:getTodayString()
    })
   },[])

  return (
    <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label><br/>
          <input type="text" value={newAppointment.title} onChange={handleInputChange} id="title"/><br/>

          <label htmlFor="contact">Contact:</label><br/>
          <input type="text" value={newAppointment.contact} onChange={handleInputChange} id="contact"/><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="date" value={newAppointment.date} onChange={handleInputChange} id="date"/><br/>

          <label htmlFor="time">Time:</label><br/>
          <input type="text" value={newAppointment.time} onChange={handleInputChange} id="time"/><br/>

          <input type="submit" value="Submit"/>
        </form>
  );
};
