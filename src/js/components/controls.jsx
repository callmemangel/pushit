import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      color: this.props.color 
    }
  }

}
