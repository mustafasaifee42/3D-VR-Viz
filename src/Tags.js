import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './tags.css';


class Tag extends Component {
   constructor(props){
      super(props)
      this.state = {
          txt: this.props.txt,
      }
    }
  
  componentWillMount() {
  }
  componentDidUpdate() {
    }
  render() {
    return (
        <div className='tag'>{this.state.txt}</div>
      )
  }
}
export default Tag