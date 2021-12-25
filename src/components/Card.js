import axios from 'axios';
import React, { useEffect, useState } from 'react';

import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const api = "https://randomuser.me/api/";


const Card = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios(api).then(res => setUser(res.data.results[0]))
        .catch((err) => console.log(err));
    }, []);

    console.log(user);
    return (
        <>
        mehmet
        <div className='card-container' key = {user.id.value}>
            <div className="grid-container">
                <div><img src={user.picture.large} alt="" style={{width: "100px"}}/></div>
                <div>{user.name.title} {user.name.first} {user.name.last}</div>
                <div><img src={email} alt="email"/></div>
                <div>{user.email}</div>
                <div><img src={phone} alt="phone"/></div>  
                <div>{user.phone}</div>
                <div><img src={location} alt="location"/></div>   
                <div>{user.location.state}-{user.location.country}</div>
            </div>
            <div>Age: {user.registered.age}</div>
            <div>Register Date:</div>
        </div>
        </>
        
    )
}

export default Card;
