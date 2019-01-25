import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

// 组件
import { Button } from 'antd-mobile'

class Home extends Component{

  constructor(props) {
    super(props)
    this.state = {a: 100}

    this.go = this.go.bind(this)
  }

  componentDidMount() {
    
  }

  go() {
    this.props.history.push('/flex')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.goATu} src={logo} className="App-logo" alt="logo" />
          <p>react</p>
          <p>react-router-dom</p>
          <p>create-react-app</p>
          <p>antd-mobile + 自定义主题</p>
          <p>scss</p>
          <p>less</p>
          <Button onClick={this.go}>get started</Button>
        </header>
      </div>
    )
  }
}

export default Home