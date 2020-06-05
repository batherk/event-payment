import React, { useState, useEffect, createContext } from 'react';
import './../styles/App.css';
import {Parallax, Hamburger, PassTypeList} from '.'


export const PageContext = createContext(null);


export default ()=>{

  const [page,setPage] = useState("Events");
  const [posts, setPosts] = useState([]);

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
    <PageContext.Provider value={{page,setPage}}>
      <div className="App">
        <Hamburger/>
        <div className="content">
          {posts.map((post,index)=>{
            const imageSide = (index % 2 === 0 ? "left" : "right")
            const imageURL = post.imageName
            return <Parallax imageSide={imageSide} title={post.title} text={post.text} imageURL={imageURL}/>
          })}
          <PassTypeList/>
        </div>
      </div>
    </PageContext.Provider>
  );
}
