import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './md.css';
import './about.css';
import Loader from 'react-loader-spinner';


class About extends Component {
   constructor(props){
      super(props)
      this.state = {
        about: null,
      }
    }
  
  componentWillMount() {

    const readmePath = require(`./about.md`);

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          about: text,
        })
      })
  }
  componentDidUpdate() {
    }
  render() {
    if(this.state.about){
      console.log(this.state.function)
      return (
          <div className='about'>
              <ReactMarkdown
                className="md"
                source={this.state.about}
              />
          </div>
        )
      }
    else {
      return (
        <div className="loader">
          <Loader 
            type="TailSpin"
            color="#999"
            height="100"	
            width="100"
          /> 
        </div>
      )
    }
  }
}
export default About