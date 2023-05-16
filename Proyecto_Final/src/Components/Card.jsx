import React, { useState } from "react";


const Home = () => {

    const [food, setFood] = useState([])

    const getFood = async()=>{
        const url = await fetch('https://beverages-and-desserts.p.rapidapi.com/desserts/%7Bid%7D')
        .then((response)=>{
            console.log("respuesta api", response);
            return response.json()
        })

        setFood(url)
        
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
	}
};

try {
	const response = await fetch(options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
return getFood()



}
export default Home