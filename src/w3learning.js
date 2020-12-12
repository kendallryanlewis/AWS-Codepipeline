
import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Car extends Component {
    constructor() {
      super();
      this.state = {color: "red", type:"jeep"};
      this.person = {firstname: "kyle"};
    }
    render() {
      return <h2>I am {this.person.firstname} and I have a {this.state.color} {this.state.type} Car!</h2>;
    }
}

export default Car;