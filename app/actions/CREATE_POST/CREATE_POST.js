import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts/?key='
const API_KEY = 'safddsfw3234123e123sdc'

export const CREATE_POST = 'CREATE_POST'

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}${API_KEY}`, props)
  return {
    type: CREATE_POST,
    payload: request
  }
}
