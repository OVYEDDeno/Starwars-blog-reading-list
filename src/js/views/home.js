import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../component/Cards";
import { Context } from "../store/appContext";

export const Home = () => {
	const{store,actions}=useContext(Context)
	return(
	<div className="text-center mt-5">
		{store.people.map((item,index)=>{
			return(
				<Cards item={item}id={index}/>
			)
		})}		
	</div>
)};
