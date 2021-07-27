import React, {useState, useEffect} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm.js';
import {TileList} from '../../components/tileList/TileList.js';

export const AppointmentsPage = (props) => {
// State variables new appointment
  const [newAppointment , setNewAppointment ] =useState({title:'',contact:'',date:'',time:''})
  const [isNameUnique , setIsNameUnique ] =useState(true)
  
  const handleInputChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.id]:e.target.value
    })
  }

  // Clears form and adds new appointment to list on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isNameUnique){
      props.addAppointment(newAppointment)
      setNewAppointment({title:'',contact:'',date:'',time:''});
    }
  };

  // Check if the new contact's name is unique
  useEffect(()=>{
    props.appointments.find(appointment =>appointment.title==newAppointment.title)|| ''==newAppointment.title? 
      setIsNameUnique(false):setIsNameUnique(true)
   },[newAppointment])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm newAppointment={newAppointment} setNewAppointment={setNewAppointment} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointments} />
      </section>
    </div>
  );
};
