import React, { useContext } from "react";
import "../../styles/home.css";
import {Planet, People, Starship} from "../component/Cards";
import { Context } from "../store/appContext";

export const Home = () => {
	const{store,actions}=useContext(Context)
	return(
	<div className="text-center mt-5">		
		<div className="mb-5 row flex-nowrap overflow-x-scroll overflow-y-hidden">
		{store.people.map((item,index)=>{
			return(
				<div className="col"><People character={item}id={index}/></div>
			)
		})}		</div>
		<div className="mb-5 row flex-nowrap overflow-x-scroll overflow-y-hidden">
		{store.planets && store.planets.map((item,index)=>{
			return(
				<div className="col"><Planet planet={item}id={index}/></div>
			)
		})}		</div>
		<div className="mb-5 row flex-nowrap overflow-x-scroll overflow-y-hidden">
		{store.starships && store.starships.map((item,index)=>{
			return(
				<div className="col"><Starship starship={item}id={index}/></div>
			)
		})}		</div>
	</div>
)};
