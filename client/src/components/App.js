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

const styles = {
  profileBackground: {
    background: '#fff',
    padding: 24,
    minHeight: 280
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
        <Layout className="layout"  style={{minHeight: "100vh"}}>
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
              {
                this.props.isLoggedIn ? <Menu.Item key="Profile"><Link to="/profile">Profile</Link></Menu.Item> : null
              }
              {
                this.props.isLoggedIn ? <Menu.Item key="Logout"><Link to="/">Logout</Link></Menu.Item> : <Menu.Item key="Login">Login</Menu.Item>
              }

            </Menu>

          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={styles.profileBackground}>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Explore} />
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
