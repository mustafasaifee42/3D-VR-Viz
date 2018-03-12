import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from './Card.js';
import cardData from './cardData.json';


class Content extends Component {
   constructor(props){
      super(props)
      this.state = {
      }
    }
  
  componentWillMount() {
  }
  componentDidUpdate() {
    }
  render() {
      const cards = cardData
         .map((d,i) => 
                <Col xs={12} sm={6} md={4} lg={3} className="column">
                    <Card
                     title = {d.vizName}
                     img = {d.image}
                     link = {d.link}/>
                </Col>
        )
        console.log(cards)
    return (
        <Grid >
          <Row className="show-grid">
              {cards}
            <Col xs={12} sm={6} md={4} lg={3} className="column">
              <a href = 'mailto:saifee.mustafa@gmail.com' className='card suggestioncard'>
                  <img src='/img/cardImg/suggest.png' className="card-image" alt="img" />
                  <span> Suggest a 3D viz </span> 
              </a>
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default Content