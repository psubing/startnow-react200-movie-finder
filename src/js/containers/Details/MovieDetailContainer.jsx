import React from 'react';
import { getInfo } from '../Search/searchAction';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget() {
    this.props.history.push(`/`);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const omdbID = this.props.match.params.id;
    dispatch(getInfo(omdbID));
  }

  render() {
    return (
      <div>
        <div className='jumbotron bg-dark'>
          <h1 className='display-3 text-white'>Origin Movie Finder</h1>
          <h6 className='text-white'>Always know if you'll need a movie!</h6>
        </div>
        <button type="button" className="btn btn-primary" onClick={ this.redirectToTarget }>Go Back</button>
        <div className='row justify-content-center'>
          <div className='mb-3 w-75'>
            <div className='row justify-content-between'>
              <div className='col-4'>
                <img clasName="card-img" src={this.props.movieID.Poster} />
              </div>
              <div className='col-7'>
                <div className='card'>
                  <h5 className="card-header bg-dark text-white">Movie Details</h5>
                  <div className="card-body">
                    <h5 className="card-title">{this.props.movieID.Title}</h5>
                    <div className='btn-toolbar'>
                      <h5><span className="badge badge-success mr-2" >Released: {this.props.movieID.Year}</span></h5>
                      <h5><span className='badge badge-success mr-2' >{this.props.movieID.Runtime}</span></h5>
                      <h5><span className="badge badge-success" >{this.props.movieID.Genre}</span></h5>
                    </div>
                    <p className="card-text">{this.props.movieID.Plot}</p>
                    <br />
                    <p className="card-text">{this.props.movieID.Awards}</p>
                    <br />
                    {this.props.movieID.Ratings ? (
                      this.props.movieID.Ratings.map(rating =>
                      <div>
                        <p style={{display: 'inline'}}>
                          <strong>{rating.Source}: </strong>{rating.Value}
                        </p>
                        <br />
                      </div>
                    )):(<div></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
