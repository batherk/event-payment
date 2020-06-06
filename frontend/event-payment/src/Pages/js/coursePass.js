import React from 'react';
import './../../App.css';

export default ()=>{

  return (
      <div>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        <label>
            Phone:
            <input type="phone" name="phone" />
        </label>
        <input type="submit" value="Submit" />
      </div>

  );
}
