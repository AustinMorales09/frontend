import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './SingleAttraction';






class AttractionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/attractions/')
      .then(response => {
        this.setState({ cincies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  attractionList() {
    return this.state.cincies.map(currentAttraction => (
      <Attraction cincy={currentAttraction} key={currentAttraction._id} />
    ));
  }

  render() {
    return (
      <div>
        <h2 className='center mt-3'>Attractions</h2>
        <div className='container-fluid'>
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
         
          </div>
        </div>
      </div>
    );
  }
}

export default AttractionsList;
