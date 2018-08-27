import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import MovieSearchContainer from './containers/Search';
import MovieDetailContainer from './containers/Details';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } { ...this.props } />
        </div>
      </Router>
    );
  }
}
