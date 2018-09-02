import React, { Component } from 'react';
//import { Button,Grid,Row,Col } from 'react-bootstrap';
//import logo from './logo.svg';
import FactionCard from './FactionCard';
import './App.css';

class App extends Component {
    
    


  render() {
      var divStyle = {
          margin:'auto'
        };
      const numbers = [{"title":"Elf","titleImg":"https://pre00.deviantart.net/ab49/th/pre/i/2011/175/7/b/young_elven_bowman_by_dunechampion-d3jmkz5.jpg"},{"title":"Dwarf","titleImg":"https://pre00.deviantart.net/bc8a/th/pre/i/2016/326/6/0/dwarf_warrior_by_bakarov-dap9dbt.jpg"}, {"title":"Human","titleImg":"https://vignette.wikia.nocookie.net/central/images/b/bc/Human_warrior_by_saturnoarg-d3kpdd4.jpg/revision/latest?cb=20161123050603"},{"title":"Orcs","titleImg":"https://orig00.deviantart.net/78ef/f/2017/122/b/a/orc_warrior__commission__by_jackiefelixart-db7urih.jpg"}];
      const listItems = numbers.map((number) =>
          <FactionCard key={number.title} faction={number} />
        );
    return (
        <div className="row">
            <div className="col-md-12 row" style={divStyle}>
            {listItems}
    
            </div>
            <div className="row">
                <div className="col-md-8">
                
                </div>
                <div className="col-m-4">
                
                </div>
            </div>
        </div>
    );
  }
}

export default App;




