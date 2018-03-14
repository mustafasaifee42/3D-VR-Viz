import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from './Card.js';
import Tag from './Tags.js';
import About from './About.js';
import Imgstest from './imageView.js';
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
        gitLink:null,
        demo:null,
      }
    }
  
  componentWillMount() {
    console.log(this.props.match.path.substr(1));
    console.log(cardData[13]);
    const readmePath = require(`./description${this.props.match.path}.md`);

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        const lines = text.split('\n');
        const Desciption = lines.slice(4).join('\n').trim();
        const func = lines[0].split(',').reduce((ary, cur) => {
            ary.push(`${cur.trim()}`);
            return ary;
          }, []);
        const example = lines[2].split(',').reduce((ary, cur) => {
            ary.push(`${cur.trim()}`);
            return ary;
          }, []);
        const exampleSource = lines[3].split(',').reduce((ary, cur) => {
            ary.push(`${cur.trim()}`);
            return ary;
          }, []);
        let exampleImgs = [];
        for (let i = 0; i < example.length; i++){
          exampleImgs.push({src:example[i],caption:exampleSource[i], width: 1, height: 1})
        }
        const img = lines[1]
        this.setState({
          function: func,
          body: Desciption,
          coverImg: img,
          photo:exampleImgs,
          gitLink:cardData[parseInt(this.props.match.path.substr(1))-1].gitRepo,
          Demo:cardData[parseInt(this.props.match.path.substr(1))-1].demo,
        })
      })
  }
  componentDidUpdate() {
    }
  render() {
    console.log(this.state);
    let stl = {
          color: '#46526A',
          fontFamily: 'IBM Plex Sans',
          fontSize: '1.6rem',
          fontWeight: '500',
        }
    if(this.state.body){
      const tags = this.state.function
         .map((d,i) => 
                    <Tag
                     txt = {d}/>
        )
        let git, demo
        if(this.state.gitLink){
          git = <a href = {this.state.gitLink} className="button" target="_blank">GitHub Repo</a>;
          demo = <a href = {this.state.Demo} className="button" target="_blank">VR Demo</a>;
        }
        else {
          git = <div className="disabled">GitHub Repo</div>;
          demo = <div className="disabled">VR Demo</div>;
        }
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
                <div className='subHead-second'> Git Repo </div>
                {git}
                <div className='subHead-second'> Demo </div>
                {demo}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xsHidden={true} md={4} />
              <Col xs={12}  md={8}>
              <h3 style = {stl}>Examples</h3>
                <Imgstest photos={this.state.photo} />
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