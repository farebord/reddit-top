import React  from 'react'
import { connect } from 'react-redux';

import { fetchRedditTop } from '../actions'

const PostsMenu = ({ getRedditTop, before, after}) => 
    <div>
      <button>Clear all</button>
      <button onClick={() => getRedditTop(50, before, null)} disabled={before === null}>Previous page</button>
      <button onClick={() => getRedditTop(50, null, after)}>Next page</button>
    </div>

const mapStateToProps = ({ top }) => ({
  before: top.data &&  top.data.before,
  after: top.data && top.data.after
});

const mapDispatchToProps = dispatch => ({
  getRedditTop: (limit, prev, next) => dispatch(fetchRedditTop(limit, prev, next))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsMenu)