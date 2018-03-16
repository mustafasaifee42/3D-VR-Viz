import React, { Component } from 'react';
import './tags.css';


class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: this.props.txt,
    }
  }
  render() {
    return (
      <div className='tag'>{this.state.txt}</div>
    )
  }
}
export default Tag