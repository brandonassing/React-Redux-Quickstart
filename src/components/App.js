import React, { Component } from 'react';
import Explore from './Explore.js';
import Profile from './Profile.js';
import './App.css';
import {Button} from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">Explore</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
              <Menu.Item key="3">Logout</Menu.Item>
            </Menu>

          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route exact path="/" component={Explore} />
            <Route path="/profile" component={Profile} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Linktrest
          </Footer>
        </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
