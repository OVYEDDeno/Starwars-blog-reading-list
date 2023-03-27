const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			planets:[],
			starships:[],
			favorites:[]

		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/people/")
				.then((response)=>response.json())
				.then((data)=>{
					console.log(data)
					setStore({people:data.results})
				})
				fetch("https://swapi.dev/api/planets/")
				.then((response)=>response.json())
				.then((data)=>{
					console.log(data)
					setStore({planets:data.results})
				})
				fetch("https://swapi.dev/api/starships/")
				.then((response)=>response.json())
				.then((data)=>{
					console.log(data)
					setStore({starships:data.results})
				})
			},
			addFavorites:(name)=>{
				let store=getStore()
				if(store.favorites.includes(name)){
					let newFavorites= store.favorites.filter((item)=>item!=name)
					setStore({
						favorites:newFavorites
					})
				}else{
					store.favorites.push(name)
				setStore(store)
				}
				
			},

		}
	};
};

export default getState;
