import React, { Component } from 'react';
import Board from './Board.js';


class Explore extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          explore
          <Board />
        </div>
    );
  }
}

export default Explore;
