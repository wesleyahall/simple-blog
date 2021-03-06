import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/FETCH_POSTS'
import { Link } from 'react-router'
import './PostsList.styl'

class PostsList extends React.Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div className='PostsList'>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add New Post
          </Link>
        </div>
        <ul>
          <li>post1</li>
          <li>post2</li>
          <li>post3</li>
        </ul>
      </div>
    )
  }
}

PostsList.propTypes = {
  fetchPosts: React.PropTypes.func.isRequired
}

export default connect(null, { fetchPosts })(PostsList)
