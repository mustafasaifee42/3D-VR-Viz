import React, { Component } from 'react';
import './card.css';
import { Link } from 'react-router-dom';


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      img: this.props.img,
      link: this.props.link,
    }
  }
  render() {
    return (

      <Link to={`/${this.props.link}`} className='card'>
        <span> {this.state.title} </span>
        <img src={this.state.img} className="card-image" alt="img" />
      </Link>
    )
  }
}
export default Card