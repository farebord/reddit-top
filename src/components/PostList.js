import React from 'react'
import moment from 'moment'
import Icon from './Icon'

import './PostList.css'


export const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
      <div key={post.data.id} className="post-row">
        <div className="post-thumbnail">
          <img alt={post.data.id} src={post.data.thumbnail}/>
        </div>
        <div className="post-info">
          <div className="post-title">{post.data.title}</div>
          <div className="post-details">
              <Icon icon="user" fontAwesomeExtras="far" /> {post.data.author} &nbsp;
              <Icon icon="clock" fontAwesomeExtras="far" /> {moment(post.data.created_utc, 'X').fromNow()} &nbsp;
              <Icon icon="comments" fontAwesomeExtras="far"/> {post.data.num_comments}
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default PostList;