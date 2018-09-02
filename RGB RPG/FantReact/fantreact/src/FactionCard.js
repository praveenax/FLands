import React, { Component } from 'react';
//import { Button,Grid,Row,Col } from 'react-bootstrap';
//import logo from './logo.svg';
import './App.css';
import Stars from './Stars';

class FactionCard extends Component {
  render() {
      
      var faction = this.props.faction;
      var divStyle = {
          height:'75px'
        };
    return (
        <div className="col-md-3 faction-card">
      <div className="faction-inner">
            <img style={divStyle} className="col-md-3" src={faction.titleImg} alt="Generic placeholder image" />
            <div className="col-md-9">
            <span className="faction-title">
                {faction.title}
            </span>
            <div className="col-md-12">

                <div className="row">
                    <span className="col-md-4">
                        Military
                    </span>
                    <div className="col-md-8 star-list">
                        <Stars count="0" />
                    </div>
                </div>
                <div className="row">
                    <span className="col-md-4">
                        Economy
                    </span>
                    <div className="col-md-8 star-list">
                        <Stars count="1" />
                    </div>
                </div>
                <div className="row">
                    <span className="col-md-4">
                        Cultural
                    </span>
                    <div className="col-md-8 star-list">
                        <Stars count="5" />
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    );
  }
}

export default FactionCard;
