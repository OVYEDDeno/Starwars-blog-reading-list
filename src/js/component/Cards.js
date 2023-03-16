import React from "react";
import { Link } from "react-router-dom";
const Cards = (props)=>{
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src="https://starwars-visualguide.com/assets/img/characters/+props.id" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.item.name}</h5>
    <p className="card-text">Height:{props.item.height}</p>
    <p className="card-text">Gender:{props.item.gender}</p>
    <p className="card-text">Birth Year:{props.item.birth_year}</p>
    <Link to={"/single/"+props.id}><i className="btn btn-primary">Learn More!</i></Link>
  </div>
</div>
    )
}
export default Cards