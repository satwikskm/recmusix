import React from 'react'
import { useState,useEffect } from 'react';

  

const Music = () => {
  const [music, setMusic] = useState([]);
  

  const getMusic = async () => {
    try {
      const response = await fetch("http://localhost:4000/music");
      const jsonData = await response.json();

     
      
      setMusic([...music,jsonData]);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  // useEffect(() => {
  //   getMusic();
  // }, []);

  return (
    <div>
      {music.map((x)=>{
        
        <div>
          <h1>{x}</h1>
        </div>
        
      })}
    {/* {console.log(music)} */}
    </div>

    
  )
}

export default Music