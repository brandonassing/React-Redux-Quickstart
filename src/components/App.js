import React, { Component } from 'react';
import Explore from './Explore.js';
import Profile from './Profile.js';
import Login from './Login.js';
import './App.css';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { toggleLogin } from '../actions/index.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLogin: isLoggedIn => dispatch(toggleLogin(isLoggedIn))
  }
}

class App extends Component {

  Logout(){
    this.props.toggleLogin(false);
  }

  Login(){
    this.props.toggleLogin(true);
  }

  render() {
    return (
      <Router>
        <div>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['Profile']}
              style={{ lineHeight: '64px' }}
              onClick={(e) => {
                if(e.key == "Logout") {
                  this.Logout();
                }
                else if (e.key == "Login") {
                  this.Login();
                }
              }}
            >
              <Menu.Item key="Profile"><Link to="/profile">Profile</Link></Menu.Item>
              {
                this.props.isLoggedIn ? <Menu.Item key="Logout">Logout</Menu.Item> : <Menu.Item key="Login">Login</Menu.Item>
              }

            </Menu>

          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route exact path="/profile" component={Profile} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Linkterest
          </Footer>
        </Layout>
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
