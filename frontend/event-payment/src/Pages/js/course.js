import React from 'react';
import './../../App.css';
import { useEffect, useState } from 'react'
import { Parallax, PassTypeList } from './../../Components/js'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'





export default ()=>{

    const [posts, setPosts] = useState([]);
    const page = "Events";
    const paths = {
        "Events":"posts/front.json",
        "Courses":"posts/front.json",
    }


  useEffect(() => {
    if (paths[page]){
      fetch(paths[page])
    .then((res)=>res.json())
    .then((json)=>{
      setPosts(json);
    });
    }
  }, [page]);

  return (
    <div className="home">
        {posts.map((post,index)=>{
            const imageSide = (index % 2 === 0 ? "left" : "right")
            const imageURL = post.imageName
            return <Parallax imageSide={imageSide} title={post.title} text={post.text} imageURL={imageURL}/>
          })}
        <PassTypeList/>
    </div>
    

  );
}
