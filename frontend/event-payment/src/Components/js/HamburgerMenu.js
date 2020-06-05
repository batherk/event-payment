import React from 'react';
import './../styles/HamburgerMenu.css'
import { Link } from 'react-router-dom'


export default ()=>{

    const page = "Events"
    
    return (
        <div className="menu">
            <div className="category">
                <ul className="event-types">
                    <Link to='/'>
                        <li className={page==="Events"? "current" : "other"}>Home</li>
                    </Link>
                    <Link to='/events'>
                        <li className={page==="Events"? "current" : "other"}>Events</li>
                    </Link>
                    <Link to='/courses'>
                        <li className={page==="Events"? "current" : "other"}>Courses</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}



