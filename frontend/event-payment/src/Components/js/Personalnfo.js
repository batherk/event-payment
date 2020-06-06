import React, { useState } from 'react';
import './../../App.css';

export default (props)=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const pay = () => {
        console.log(`${name}, ${email}, ${phone}`)
    }

  return (
      <div>
        <label>
            Name:
            <input type="text" name="name" onChange={e=>{setName(e.target.value)}}/>
        </label>
        <label>
            Email:
            <input type="email" name="email" onChange={e=>{setEmail(e.target.value)}}/>
        </label>
        <label>
            Phone:
            <input type="phone" name="phone" onChange={e=>{setPhone(e.target.value)}}/>
        </label>
        <input type="submit" value="Submit" onClick={pay}/>
      </div>

  );
}
