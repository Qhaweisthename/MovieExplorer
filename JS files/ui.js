import {getDataFrontPage} from "./api.js";

//loading the ui for the front page 
//get the movie card html 
//manipulate and loop through javascript to show same information
//already have data from imported file 



async function loadFrontPageUi(){
let movieCardHTML = ``;

const data = await getDataFrontPage();
if (!data || !data.results){
  return console.error("No movies returned");
}

const movies = data.results

movies.forEach(movie => {
  

  movieCardHTML +=`
   <div class="card mx-4 my-4" id="movie-card" style="width: 19rem;">
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.overview.slice(0, 120)}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Language: ${movie.original_language}</li>
    <li class="list-group-item">Release date: ${movie.release_date}</li>
    <li class="list-group-item">Popularity: ${movie.popularity}</li>
  </ul>
  </div>`
  
});

const FrontPage = document.getElementById("top-rated-movies");
FrontPage.innerHTML = movieCardHTML;
}


loadFrontPageUi();



