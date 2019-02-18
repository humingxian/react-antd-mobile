let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// 异步cation
// 选择reddit
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

// 验证reddit
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const invalidatesubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

// 发送请求
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

// 接收数据
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})