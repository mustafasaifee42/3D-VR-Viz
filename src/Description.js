import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from './Card.js';
import Tag from './Tags.js';
import About from './About.js';
import cardData from './cardData.json';
import ReactMarkdown from 'react-markdown';
import './md.css';


class Desciption extends Component {
   constructor(props){
      super(props)
      this.state = {
        body: null,
        function:null,
        coverImg:null,
      }
    }
  
  componentWillMount() {
    console.log(this.props);

    const readmePath = require(`./description${this.props.match.path}.md`);

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        const lines = text.split('\n');
        const Desciption = lines.slice(2).join('\n').trim();
        const func = lines[0].split(',').reduce((ary, cur) => {
            ary.push(`${cur.trim()}`);
            return ary;
          }, []);
        const img = lines[1]
        this.setState({
          function: func,
          body: Desciption,
          coverImg: img
        })
      })
  }
  componentDidUpdate() {
    }
  render() {
    if(this.state.body){
      console.log(this.state.function)
      const tags = this.state.function
         .map((d,i) => 
                    <Tag
                     txt = {d}/>
        )
        return (
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <img src={this.state.coverImg} className="card-image" alt="img" />
              </Col>
              <Col xs={12} md={6}>
                <ReactMarkdown
                  className="md"
                  source={this.state.body}
                />
              </Col>
              <Col xs={12} md={2}>
                <div className='subHead'> Function </div>
                {tags}
              </Col>
            </Row>
            </Grid>
          )
      }
    else {
      return (
        <div> Loading </div>
      )
    }
  }
}
export default Desciption