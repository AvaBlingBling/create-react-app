import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './home.less';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="main-header">
          <h1 className="main-header-title">Ava's First Application for herself</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>按钮</Button>
      </div>
    );
  }
}

export default Home;
