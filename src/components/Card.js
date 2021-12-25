import axios from 'axios';
import React, { useEffect, useState } from 'react';

import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const api = "https://randomuser.me/api/";


const Card = () => {
    const [user, setUser] = useState({});
  
    useEffect(() => {userData()}, []);

    const userData = () => { axios(api).then(res => setUser(res.data.results[0]))
    .catch((err) => console.log(err));
    };
   
    console.log(user);
    return (
<> 
    <div className='card-container'>
        <div className="grid-container"> 
            <div><img src={user.picture.large} alt=""  className='personImg'/></div>
            <div><h3> {user.name.title} {user.name.first} {user.name.last}</h3></div>
            <div><img src={email} alt="email"/></div>
            <div>{user.email}</div>
            <div><img src={phone} alt="phone"/></div>  
            <div>{user.phone}</div>
            <div><img src={location} alt="location"/></div>   
            <div>{user.location.state}-{user.location.country}</div>
        </div>
            <hr/>
            <div>Age: {user.dob.age}</div> <br />
            <div>Register Date: {user.registered.date.slice(0,10)}</div>
    </div>    
      <button onClick={userData}>Random User</button>
</>
        
    )
}

export default Card;
