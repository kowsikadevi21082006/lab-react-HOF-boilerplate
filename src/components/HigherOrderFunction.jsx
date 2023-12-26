import React, { Component } from "react";
import Progression2 from "./Progression2";
import Progression3 from "./Progression3";
import Progression4 from "./Progression4";
import Progression5 from "./Progression5";
import Progression6 from "./Progression6";

export default class HigherOrderFunction extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  render() {
   
    return (
      <div>
         <Progression2 data={this.state.userData} />
         <Progression3 data={this.state.userData} />
         <Progression4 data={this.state.userData} />
         <Progression5 data={this.state.userData} />
         <Progression6 data={this.state.userData} />
      </div>
    );
  }
}