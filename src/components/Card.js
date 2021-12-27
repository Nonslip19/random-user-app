import axios from 'axios';
import React, { useEffect, useState } from 'react';

import emailImg from "../assets/email.svg";
import location from "../assets/location.svg";
import phoneImg from "../assets/phone.svg";


const Card = () => {
    const api = "https://randomuser.me/api/";
    const [user, setUser] = useState({});
    
    const userData = async() => { const firstData = await axios(api).then(res => (res.data.results[0]))
        .catch((err) => console.log(err));

        console.log(firstData);
        const {
            name:{title, first, last},
            picture:{large},
            email,
            phone,
            dob:{age},
            registered:{date},
            location:{state, country}

        } = firstData;

        setUser({title, first, last, large, email, phone, age, date, state, country});
    };

    const {title, first, last, large, email, phone, age, date, state, country} = user;

    useEffect(() => userData(), []);
   
    console.log(user);
    return (
<> 
    <div className='card-container'>
        <div className="grid-container"> 
            <div><img src={large} alt=""  className='personImg'/></div>
            <div><h3> {title} {first} {last}</h3></div>
            <div><img src={emailImg} alt="email"/></div>
            <div>{email}</div>
            <div><img src={phoneImg} alt="phone"/></div>  
            <div>{phone}</div>
            <div><img src={location} alt="location"/></div>   
            <div>{state}-{country}</div>
        </div>
            <hr/>
            <div>Age: {age}</div> <br />
            <div>Register Date: {date.slice(0,10)}</div>
    </div>    
      <button onClick={userData}>Random User</button>
</>
        
    )
}

export default Card;
