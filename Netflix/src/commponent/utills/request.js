const API_KEY = import.meta.env.VITE_API_KEY;



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
  fetchTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en_US&page=1`,

};








export default requests;
