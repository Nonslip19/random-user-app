import axios from 'axios';
import React, { useEffect, useState } from 'react';

import emailImg from "../assets/email.svg";
import location from "../assets/location.svg";
import phoneImg from "../assets/phone.svg";


const Card = () => {
    const api = "https://randomuser.me/api/";
    const [user, setUser] = useState({});
    
    const userData = () => { 
        axios(api).then(res => {
            console.log(res.data.results[0])
            setUser(res.data.results[0])
        })
        .catch((err) => console.log(err));
        /* const firstData =  axios(api).then(res => (res.data.results[0]))
        .catch((err) => console.log(err)); */

        /* console.log(firstData); */
      /*   const {
            name:{title, first, last},
            picture:{large},
            email,
            phone,
            dob:{age},
            registered:{date},
            location:{state, country}

        } = firstData;

        setUser({title, first, last, large, email, phone, age, date, state, country}); */
    };

    /* const {title, first, last, large, email, phone, age, date, state, country} = user;
 */
    useEffect(() => userData(), []);
   
    console.log(user);
    return (
<> 
{/* {  user ?  <div>
    <div className='card-container'>
            <div className="grid-container"> 
                <div><img src={user.picture.large} alt=""  className='personImg'/></div>
                <div><h3> {user.name.title} {user.name.first} {user.name.last}</h3></div>
                <div><img src={emailImg} alt="email"/></div>
                <div>{user.email}</div>
                <div><img src={phoneImg} alt="phone"/></div>  
                <div>{user.phone}</div>
                <div><img src={location} alt="location"/></div>   
                <div>{user.location.state}-{user.location.country}</div>
            </div>
                <hr/>
                <div>Age: {user.dob.age}</div> <br />
                <div>Register Date: {user.register.date}</div>
        </div>    
        <div>
            {user.email}
        </div>
    </div> : null} */}

    <div>{user.email}</div>
    <div>{user.gender}</div>
    
    <button onClick={userData}>Random User</button>
</>
        
    )
}

export default Card;
