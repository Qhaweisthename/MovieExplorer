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
