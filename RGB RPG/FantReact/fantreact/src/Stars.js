import React, { Component } from 'react';
//import { Button,Grid,Row,Col } from 'react-bootstrap';
//import logo from './logo.svg';
import './App.css';

class Stars extends Component {
  render() {
//      <i className="far fa-star"></i>
      var totalStars = 5;
      var numOfStars = parseInt(this.props.count,10);
      var arr = [];
      var arr2 = [];
      for(var x=0;x<numOfStars;x++){
          arr.push(x);
      }
      var diff = totalStars-numOfStars;
      for(var x=0;x<diff;x++){
          arr2.push(x);
      }
//      var arr = [1,2,3];
//      var stars = [];
      var stars = arr.map((number) =>
          <i key={number}  className="starbadge fas fa-star"></i>
        ); 
      
      var stars2 = arr2.map((number) =>
          <i key={diff+1+number}  className="starbadge far fa-star"></i>
        );
      console.log(stars);
      console.log(stars2);
      
      var starsCombine = stars.concat(stars2);
      
      
    return (
        <span>
            {starsCombine}
        </span>
                    
    );
  }
}

export default Stars;
