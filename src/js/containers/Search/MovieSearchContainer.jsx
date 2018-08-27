import React from 'react';
import { inputSearch, getMovies, } from './searchAction';
import { Link } from 'react-router-dom';


export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleAddSearch = this.handleAddSearch.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(inputSearch(value));
  }

  handleAddSearch() {
    const { searchInput, dispatch } = this.props;
    dispatch(getMovies(searchInput));
  }

  render() {
    const searchResults = this.props.searchResults
    return (
      <div>
          <div className='jumbotron bg-dark'>
            <h1 className='display-3 text-white'>Origin Movie Finder</h1>
            <h6 className='text-white'>Always know if you'll need a movie!</h6>
          </div>
        <br />
        <div className='row justify-content-center'>
          <div className='input-group mb-3 w-75'>
            <input
              type='text'
              value= {this.props.searchInput}
              onChange={ this.handleSearchInput }
              className='form-control'
              placeholder='Search for a Movie'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-dark'
                onClick={ this.handleAddSearch }
                type='button'
              >Go!</button>
            </div>
          </div>
          <br />
          {/* THIS IS WHERE LIST OF MOVIES WILL GO */}
        </div>
          {searchResults.length > 0 ? (
            <div className='row justify-content-center'>
              <div className='card mb-3 w-75'>
                <ul className="list-group list-group-flush">{this.props.searchResults.map(movie =>
                  <li className="list-group-item" key={movie.imdbId}>
                    <div className='row justify-content-between'>
                      <div className='col-sm-3'>
                        <img clasName="card-img" src={movie.Poster} />
                      </div>
                        <div className="col-sm-6">
                          <h2 className="card-title">{movie.Title}</h2>
                          <p className="card-text">{movie.Year}</p>
                          <br/>
                          <Link to={`/movie/${movie.imdbID}`}>
                            <button onClick={ this.handleGetInfo } type='button' className="btn btn-primary">More Information</button>
                          </Link>
                        </div>
                      </div>
                  </li>)}
                </ul>
              </div>
            </div>
            ) : (
              <span></span>
            )}
        </div>
    );
  }
}
