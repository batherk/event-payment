import React, { useState, useContext} from 'react';
import './../styles/HamburgerMenu.css'


export default ()=>{

    const page = "Events"
    
    return (
        <div className="menu">
            <div className="category">
                <ul className="event-types">
                    <li className={page==="Events"? "current" : "other"}>Events</li>
                    <li className={page==="Courses"? "current" : "other"}>Courses</li>
                </ul>
            </div>
        </div>
    );
}



