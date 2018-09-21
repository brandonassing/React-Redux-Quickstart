import React, { Component } from 'react';


const styles = {
  imgBlock: {
    width: "250px",
    minHeight: "250px",
    margin: "10px",
    backgroundColor: "red"
  }
}

class Image extends Component {

  constructor(props) {
    super(props);
    // set state to img: url
  }
  render() {
    return (
        <div className="img-block" style={styles.imgBlock}>
        </div>
    );
  }
}

export default Image;
