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
export async function getData(movieName) {
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
    return data;

  } catch (error) {
   return console.error("Failed to fetch movies:", error.message);
    
  }
}

//api used for front page
export async function getDataFrontPage(endpoint){
  const url = `https://api.themoviedb.org/3/movie/${endpoint}`;

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
    console.log("top rated moives:", data);
    return data;

  } catch (error) {
   return console.error("Failed to fetch TOP RATED movies:", error.message);
    
  }
  
} 


