import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { selectedsubreddit, postsBySubreddit } from './subReddit'

export default combineReducers({
  todos,
  visibilityFilter,
  selectedsubreddit,
  postsBySubreddit
})