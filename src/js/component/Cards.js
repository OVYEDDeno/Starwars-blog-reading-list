import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const People = (props)=>{
  const{store,actions}=useContext(Context)
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.character.name}</h5> 
    <p className="card-text">Height: {props.character.height}</p>
    <p className="card-text">Gender: {props.character.gender}</p>
    <p className="card-text">Birth Year: {props.character.birth_year}</p>
    <div className="navbar"><Link to={"/single/"+props.id}><i className="btn btn-primary">Learn More!</i></Link>
    <button className="btn border-warning" onClick={()=> actions.addFavorites(props.character.name)}>{store.favorites.includes(props.character.name) ? <i class="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</button></div>
  </div>
</div>
    )
}


export const Planet = (props)=>{
  return(
      <div className="card" style={{width: "18rem"}}>
<img src="https://lumiere-a.akamaihd.net/v1/images/5f60bbf3414ddf0001687bf4-image_f155a53d.jpeg?region=336%2C0%2C864%2C864" className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{props.planet.name}</h5> 
  <p className="card-text">Terrain: {props.planet.terrain}</p>
  <p className="card-text">Gravity: {props.planet.gravity}</p>
  <p className="card-text">Climate: {props.planet.climate}</p>
  <div className="navbar"><Link to={"/single/"+props.id}><i className="btn btn-primary">Learn More!</i></Link>
  <button className="btn border-warning"><i className="fa-regular fa-heart"></i></button></div>
</div>
</div>
  )
}

export const Starship = (props)=>{
  return(
      <div className="card" style={{width: "18rem"}}>
<img src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C31%2C1600%2C800" className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{props.starship.name}</h5> 
  <p className="card-text">Model: {props.starship.model}</p>
  <p className="card-text">Class: {props.starship.starship_class}</p>
  <p className="card-text">Speed: {props.starship.max_atmosphering_speed}</p>
  <p className="card-text">Cost: {props.starship.cost_in_credits}</p>
  <div className="navbar"><Link to={"/single/"+props.id}><i className="btn btn-primary">Learn More!</i></Link>
  <button className="btn border-warning"><i className="fa-regular fa-heart"></i></button></div>
</div>
</div>
  )
}