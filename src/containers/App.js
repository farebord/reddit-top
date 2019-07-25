import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRedditTop } from '../actions'

import './App.css';

const App = ({ getRedditTop }) => {
  useEffect(() => {
    getRedditTop(0)
  })
  return (
    <div className="App">

    </div>
  );
}

export const mapStateToProps = ({ top }) => ({
  
});

export const mapDispatchToProps = dispatch => ({
  getRedditTop: (count) => dispatch(fetchRedditTop(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
