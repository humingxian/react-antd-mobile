var state = {
  selectedsubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true, // 是否还在请求中
      didInvalidate: false, // 标记数据是否过期
      items: [] // 存放信息列表本身
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547, // 最后更新时间
      items: [
        {
          id: 42,
          title: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          title: 'Creating a Simple Application Using React JS and Flux Architecture'
        }
      ]
    }
  }
}