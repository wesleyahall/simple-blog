import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/FETCH_POSTS'

class PostsList extends React.Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div className='PostsList'>
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
