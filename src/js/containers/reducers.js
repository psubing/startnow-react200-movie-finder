const defaultState = {
  searchResults: [],
  movieID: [],
  searchInput: ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'UPDATE_MOVIE_SEARCH': {
      return {
        ...state,
        searchInput: payload.searchInput
      };
    }

    case 'GET_MOVIES_FULFILLED': {
      return {
        ...state,
        searchResults: action.payload.data.Search,
        searchInput: ''
      };
    }

    case 'GET_TITLE_FULFILLED': {
      return {
        ...state,
        movieID: action.payload.data
      };
    }

    default: {
      return state;
    }
  }
}
