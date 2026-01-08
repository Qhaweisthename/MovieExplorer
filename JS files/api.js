//api read access token
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODcwYzZhY2FmM2FiMGE4MDQ4MDRjZmRkNGE3M2M1ZSIsIm5iZiI6MTc2Nzg1MjY0OC4zNDYsInN1YiI6IjY5NWY0YTY4NmIwOWJiMmZiNDM5MDNiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._eUBK-nRXyt58Z_7FDM7zbGGmWIeRrQDHrW1PqHsfE8";

function buildSearchUrl(movieName) {
  const baseUrl = "https://api.themoviedb.org/3/search/movie";


  //no need to hardcode parameters 
  const params = new URLSearchParams({
    query: movieName,
    include_adult: false,
    language: "en-US",
    page: 1
  });

  return `${baseUrl}?${params}`;
}

//retrieve the data
async function getData(token, movieName) {
  const url = buildSearchUrl(movieName);

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Movie data:", data);

  } catch (error) {
    console.error("Failed to fetch movies:", error.message);
  }
}

getData(token, "harry potter");
