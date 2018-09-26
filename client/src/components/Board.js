import React, { Component } from 'react';
import Image from './Image.js';
import { Row, Col } from 'antd';


const styles = {
  flexcontainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  }
}

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div style={styles.flexcontainer}>
          <Image />
          <Image />

          <Image />

          <Image />
          <Image />
          <Image />
          <Image />

        </div>
    );
  }
}

export default Board;
