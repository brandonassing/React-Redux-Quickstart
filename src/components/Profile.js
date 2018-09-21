import React, { Component } from 'react';
import Board from './Board.js';
import { Input } from 'antd';


const styles = {
  linkDiv: {
    padding: "10px"
  }
}

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  submit () {
    console.log("sumbit");
  }

  render() {
    return(
        <div >
          <div style={styles.linkDiv}>
            <Input placeholder="Image url (press enter to submit)" onPressEnter={this.submit} />
          </div>
          <Board />
        </div>
    );
  }
}

export default Profile;
