const API_KEY = '1c1384c9d3c5004c124bc0246a787aec';



const requests = {
  fetchTrending:
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-Us`,

  fetchTopRatedMovies:
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOrginals:
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShows: `tv/popular?api_key=${API_KEY}&language=en_US&page=1`,

};
// const arrRequests = Object.keys(requests).map((key) => [key, requests[key]]);



export default requests;
// export { API_KEY, arrRequests };