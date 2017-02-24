import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts/?key='
const API_KEY = 'safddsfw3234123e123sdc'

export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
