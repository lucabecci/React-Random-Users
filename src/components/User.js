import React from 'react';
const User = ({ name, location, email, picture }) => {
 return (
  <div className='random-user'>
   <div>
    <img src={picture.medium} alt={name.first}  className='user-image'/>
   </div>
   <div><strong>Name:</strong> {name.first} {name.last}</div>
   <div><strong>Country:</strong> {location.country}</div>
   <div><strong>Email:</strong> {email}</div>
  </div>
 );
};
export default User;