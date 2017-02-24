import App from './components/App'
import PostsList from './components/PostsList'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: PostsList},
    childRoutes: [
    ]
  }
])
