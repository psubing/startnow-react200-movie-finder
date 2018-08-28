import axios from 'axios';

export const getMovies = (searchInput) => ({
  type: 'GET_MOVIES',
  payload: axios.get('https://www.omdbapi.com/?s=' + searchInput + '&type=movie&apikey=' + '5fa5a0bd').catch(err => { console.log(err); alert('The movie does not exist!') })
});

export function inputSearch(searchInput) {
  return {
    type: 'UPDATE_MOVIE_SEARCH',
    payload: { searchInput }
  }
}

export const getInfo = (omdbID) => ({
  type: 'GET_TITLE',
  payload: axios.get('https://www.omdbapi.com/?i=' + omdbID + '&apikey=' + '5fa5a0bd').catch(err => { console.log(err); alert('The movie does not exist!') })
});
