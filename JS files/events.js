import { getData } from "./api.js"; // importing functions from api file
import { searchedMovies } from "./ui.js";
//import { renderMovies } from "./ui.js"; // your UI rendering function

export function setupEvents() {  
  const form = document.querySelector("form");//selecting form 
  const input = form.querySelector("input");//select input 

  form.addEventListener("submit", async (e) => { //giving form functionality
    e.preventDefault();//prevent form reloading or navigation to another page
    const query = input.value.trim();// getting query which will be used for the moive name and making sure there are no spaces
    if (!query) return; // if theres no query then return nothing 

    try{
    const movies = await getData(query); // using api from different file and waiting response 

    console.log("Heres The Data: ", movies);
    if (movies) searchedMovies(movies.results); // send results to UI
    }catch(err){
      console.log("error movie could not be fetched: ", err);
    }
  });
}
