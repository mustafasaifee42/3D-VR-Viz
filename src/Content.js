import React, { Component } from 'react';
import CardGrid from './CardGrid.js';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { ButtonToolbar } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All'
    }
  }
  render() {
    let tags = ["Comparison", "Conceptual Drawing", "Distribution", "Geospatial Data", "Movement", "Part of Whole", "Relationships", "Trends"]
    const toggle = tags
      .map((d, i) =>
        <ToggleButton value={d} key={i}>{d}</ToggleButton>
      )
    return (
      <div>
        <div className="subHeadMenu">
          <div className="subHeadTitle">Filter by Functions</div>
          <ButtonToolbar bsClass="toggleSubHead">
            <ToggleButtonGroup type="radio" name="options" defaultValue={"All"} onChange={(eventType) => {
              this.setState({
                filter: eventType,
              })
            }
            }>
              <ToggleButton value={"All"}>All</ToggleButton>
              {toggle}
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
        <CardGrid Filter={this.state.filter} />
      </div>
    )
  }
}
export default Content