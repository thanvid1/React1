import React, {useState} from 'react'
import "./index.css";
import sampleimage from "./assets/sampleimage.jpg";

const ProfileCard=({name, bio,initialBg})=>{
  const[bg, setBg]=useState(initialBg);
  return(
    <div className="card" style={{background:bg}}
    onMouseEnter={()=>setBg("linear-gradient(135deg, #ffffff, #FFA07A")}
    onMouseLeave={()=>setBg(initialBg)}>
      <img src={sampleimage} alt={name} className="pic"/>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}
export default function App(){
  return(
    <div className="container">
      <ProfileCard name="Michael Jackson" bio="American singer, songwriter, dancer, and philanthropist known worldwide as the “King of Pop.”" initialBg="linear-gradient(135deg, #453524 , #E0E6FA"/>
    </div>
  )
}
