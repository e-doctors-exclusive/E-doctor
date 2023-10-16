import React from 'react';
import "./getApointments.css"

interface User {
  name: string;
  email: string;
 
}

interface Appointment {
  id: number;
  date: string;
  time: string;
  description: string;
}

function UserAppointments() {
  const user: User = {
    name: 'cherni dhia',
    email: 'dhiacherni@.com',
   
  };

  const appointments: Appointment[] = [
    { id: 1, date: '2023-10-15', time: '09:00 AM', description: 'Meeting with Client A' },
    { id: 2, date: '2023-10-16', time: '02:30 PM', description: 'Team Meeting' },
   
  ];

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div className="user-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <h2>Appointments</h2>
      <div className="appointments">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment">
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserAppointments;
