import React, { useState} from 'react';
import './../styles/Hamburger.css'
import { HamburgerMenu } from '.';

export default ()=>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen? "hamburger-cont menu-open" : "hamburger-cont"}>
        <div className="hamburger"onClick={()=>setIsOpen(!isOpen)}><div></div></div>
        <HamburgerMenu/>
    </div>
  );
}






