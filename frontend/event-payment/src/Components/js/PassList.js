import React, { useState, useEffect } from 'react';
import './../styles/PassList.css'
import { Pass } from '.'


export default (props) => {

  const [passes, setPasses] = useState([]);

  useEffect(()=>{
    setPasses(props.passes)
  }, [props.passes]);

  return (
    <div className="pass-type-list">
      {passes? passes.map((pass,index)=>{
      return <Pass id={pass.id} role={pass.role} price={pass.price} url={'Talal.jpg'}/>
    }):null}
    </div>
  );
}

