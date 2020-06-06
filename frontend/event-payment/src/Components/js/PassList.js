import React from 'react';
import './../styles/PassTypeList.css'
import { Pass } from '.'


export default (props) => {

  const types = [{role:'Leader', url:'Talal.jpg', 'price':34},{'role':'Follower', url:'Talal.jpg', 'price':34},{'role':'Couple', url:'Talal.jpg', 'price':60},{'role':'Solo', url:'Talal.jpg', 'price':44}]
  return (
    <div className="pass-type-list">
      {types.map((passType,index)=>{
      return <Pass url={passType.url} role={passType.role} price={passType.price}/>
    })}
    </div>
  );
}

