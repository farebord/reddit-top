import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRedditTop } from '../actions'

import PostsMenu from '../components/PostsMenu'
import PostList from '../components/PostList'

import './App.css';

const App = ({ getRedditTop, posts, fetchedPosts }) => {
  useEffect(() => {
    getRedditTop(50)
  }, [])
  return (
    <div className="wrapper">
      <div className="left-panel">
        <div className="menu-row">
          <PostsMenu />
        </div>
        <div className="posts-row">
          {fetchedPosts && <PostList posts={posts} />}
        </div>
      </div>
      <div className="right-panel">
        Post details
      </div>
    </div>
  );
}

const mapStateToProps = ({ top }) => ({
  fetchedPosts: top.fetched,
  posts: top.data && top.data.children
});

const mapDispatchToProps = dispatch => ({
  getRedditTop: (limit) => dispatch(fetchRedditTop(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
