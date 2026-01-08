import { getDataFrontPage } from "./api.js";


const endpoints = ["top_rated", "popular", "upcoming", "now_playing"];

function formatTitle(text) {
  return text
    .replace("_", " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

export async function loadFrontPageUi(endpoint) {
  let movieCardHTML = ``;

  const data = await getDataFrontPage(endpoint);

  if (!data || !data.results) {
    console.error("No movies returned for", endpoint);
    return;
  }

  const movies = data.results;

  // Add heading first
  movieCardHTML += `
    <h2 class="my-4">${formatTitle(endpoint)}</h2>
    <div class="d-flex flex-wrap">
  `;

  movies.forEach(movie => {
    movieCardHTML += `
      <div class="card mx-3 my-3 movie-card" style="width: 400px;">
        <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.overview.slice(0, 120)}...</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Language: ${movie.original_language}</li>
          <li class="list-group-item">Release date: ${movie.release_date}</li>
          <li class="list-group-item">Popularity: ${movie.popularity}</li>
        </ul>
      </div>
    `;
  });

  // Close flex container
  movieCardHTML += `</div>`;

  const container = document.getElementById(endpoint);
  container.innerHTML = movieCardHTML;
}

endpoints.forEach(endpoint => {
  loadFrontPageUi(endpoint);
});



///reneder movies on button click 



export async function searchedMovies(data){

  //get the data from the api 
  //loop through each element 
  //make them display as a card 

 let searchCardHTML = ``;

 //display header
 //displays card
 const subHeading = document.getElementById("search-title");
 subHeading.innerHTML = "Searched Results: ";

//loops data 
 data.forEach(item => {
  searchCardHTML += `
      <div class="card mx-3 my-3 movie-card" style="width: 400px;">
        <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.overview.slice(0, 120)}...</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Language: ${item.original_language}</li>
          <li class="list-group-item">Release date: ${item.release_date}</li>
          <li class="list-group-item">Popularity: ${item.popularity}</li>
        </ul>
      </div>
    `;
 });

 //displays card
 const container = document.getElementById("searched-movie");
 container.innerHTML = searchCardHTML;

}

//clear searched UI

export function resetSearch(){
const subHeading = document.getElementById("search-title");
subHeading.innerHTML = "";
const container = document.getElementById("searched-movie");
container.innerHTML = "";
const searchBar = document.getElementById("search-bar");
searchBar.value = "";

}
