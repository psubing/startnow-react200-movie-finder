import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    searchInput: store.search.searchInput,
    searchResults: store.search.searchResults,
    movieID: store.search.movieID
  };
}


export default connect(mapStoreToProps)(MovieDetailContainer);
