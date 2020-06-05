import React, { useState, useContext} from 'react';
import './../styles/HamburgerMenu.css'
import { PageContext } from './App'

export default ()=>{
    const {page, setPage} = useContext(PageContext);
    return (
        <div className="menu">
            <div className="category">
                <ul className="event-types">
                    <li className={page==="Events"? "current" : "other"} onClick={()=>setPage("Events")}>Events</li>
                    <li className={page==="Courses"? "current" : "other"} onClick={()=>setPage("Courses")}>Courses</li>
                </ul>
            </div>
        </div>
    );
}



