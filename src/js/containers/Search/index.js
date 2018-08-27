import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    searchInput: store.search.searchInput,
    searchResults: store.search.searchResults,
    movieId: store.search.movieId
  };
}


export default connect(mapStoreToProps)(MovieSearchContainer);
