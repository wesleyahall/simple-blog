import App from './components/App'
import PostsList from './containers/PostsList'
import NewPost from './components/NewPost'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: PostsList},
    childRoutes: [
      {path: '/posts/new', component: NewPost}
    ]
  }
])
