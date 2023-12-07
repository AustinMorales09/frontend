// FoodList.js
import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './SingleAttraction'
export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/attractions/')
      .then(response => {
        const foodAttractions = response.data.filter(cincy => cincy.category === 'Food');
        this.setState({ cincies: foodAttractions });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  attractionList() {
    return this.state.cincies.map(currentAttraction => {
      return <Attraction cincy={currentAttraction} key={currentAttraction.category} />;
    });
  }

  render() {
    return (
      <div>
        <h2 className='center mt-3'>Food Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    );
  }
}
