import { setupEvents } from "./events.js";
import { loadFrontPageUi } from "./ui.js";
//import { loadTrendingMovies } from "./api.js";
//import { renderMovies } from "./ui.js";

// Run this function when the page loads
async function init() {
  // Set up all the buttons and input events
  setupEvents();
  loadFrontPageUi();
  

  // Optional: load trending movies on first page load
  // const trending = await loadTrendingMovies();
  // renderMovies(trending);
}

// Start the app
init();
