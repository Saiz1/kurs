import React, { Component } from 'react';
import getRequest from '../services/api.js';
import Header from '../components/header';
import Footer from '../components/footer';
import LineStatusTemplate from '../components/lineStatusesTemplate.js';

export default class TubeStatuses extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     
    };
  }


  render(){
    return(
      <div>
        <Header />
       
          <LineStatusTemplate />
       
         <Footer />
      </div>
    )
  }
}