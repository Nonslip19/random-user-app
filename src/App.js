import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";

const api = "https://randomuser.me/api/";

function App() { 
  const [user, setUser] = useState({});
  
  const userData = () => {axios(api).then(res => setUser(res.data.results[0]))
  .catch((err) => console.log(err));
  };

  useEffect(() => userData(), []);
 
console.log(user);

  return ( 
    <div className="App">
       <div className='card-container'>
            <div className="grid-container">
                <div><img src={user.picture.large} alt=""  className='personImg'/></div>
                <div>{user.name.title} {user.name.first} {user.name.last}</div>
                <div><img src={email} alt="email"/></div>
                <div>{user.email}</div>
                <div><img src={phone} alt="phone"/></div>  
                <div>{user.phone}</div>
                <div><img src={location} alt="location"/></div>   
                <div>{user.location.state}-{user.location.country}</div>
            </div> 
            <div>Age: {user.dob.age}</div> <br />
            <div>Register Date:{user.registered.date.slice(0,10)}</div>
        </div>    
        <button onClick={userData}>Random User</button>
    </div>       
  ); 
}
export default App; 
