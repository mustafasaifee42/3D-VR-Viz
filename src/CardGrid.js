import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from './Card.js';
import cardData from './cardData.json';
import './style.css';


class CardGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    const foo = cardData.filter((item) => {
      if (this.props.Filter === 'All') {
        return true;
      }
      return item.function.includes(this.props.Filter);
    });
    console.log(foo);
    const cards = foo
      .map((d, i) =>
        <Col xs={12} sm={6} md={4} lg={3} key={d.vizName} className="column">
          <Card
            title={d.vizName}
            img={d.image}
            link={d.link}
            gitRepo={d.gitRepo}
            demo={d.demo} />
        </Col>
      )
    console.log(cards);
    return (
      <Grid >
        <Row className="show-grid">
          {cards}
          <Col xs={12} sm={6} md={4} lg={3} className="column">
            <a href='mailto:saifee.mustafa@gmail.com' className='card suggestioncard'>
              <img src='/img/cardImg/suggest.png' className="card-image" alt="img" />
              <span> Suggest a 3D viz </span>
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default CardGrid