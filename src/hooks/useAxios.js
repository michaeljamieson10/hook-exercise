import { useState } from "react";
import axios from "axios";
import uuid from "uuid";
// function useAxios(BASE_URL, name="") {
//     const [array, setArray] = useState([]);
//     const addArray = async () => {
//         const response = await axios.get(
//             `${BASE_URL}`
//         );
//         setArray(array => [...array, { ...response.data, id: uuid() }]);
//     }
//     return [array, addArray];
//   };

function useAxios(BASE_URL) {
    const [array, setArray] = useState([]);
    const addArray = async (name="") => {
        console.log(name, 'this is what name is ///')
        
            const response = await axios.get(
                `${BASE_URL}${name}`
                );
                setArray(array => [...array, { ...response.data, id: uuid() }]);

    }
    return [array, addArray];
  };


// const addCard = async () => {
// const response = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   ); 
//  
//  
//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };

export default useAxios;