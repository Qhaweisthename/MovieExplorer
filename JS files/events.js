import { getData } from "./api.js"; // importing functions from api file
import { searchedMovies } from "./ui.js";
import { resetSearch } from "./ui.js";
//import { renderMovies } from "./ui.js"; // your UI rendering function

export function setupEvents() {  
  const form = document.querySelector("form");//selecting form 
  const input = form.querySelector("input");//select input 
  const clearButton = document.getElementById("reset-button");
  const rickBtn = document.getElementById("rick-button");

  const originalText = "Don't Click me 🙂";
  rickBtn.textContent = originalText;

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
//when mouse is on the action will performed
rickBtn.addEventListener("mouseover", () => {
  rickBtn.textContent = "Nooo, Don't Do it!!!!😨";
});

//when mouse is off the action will performed
rickBtn.addEventListener("mouseout", () => {
  rickBtn.textContent = originalText;
});
  rickBtn.addEventListener("click", () => {
    //opens new window and _blank means it will be a completely new window not the current one
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
});

   clearButton.addEventListener("click", () => { //giving form functionality
    resetSearch();
  });
}
