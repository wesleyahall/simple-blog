import { combineReducers } from 'redux'
import PostsReducer from './PostsReducer'

const RootReducer = combineReducers({
  posts: PostsReducer
})

export default RootReducer
