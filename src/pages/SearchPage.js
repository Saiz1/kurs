import React, { Component } from 'react';
import SearchFromTheSite from '../components/searchTheSiteFrom';
import Header from '../components/header';
import Footer from '../components/footer';



export default class Searchpage extends React.Component{
  constructor(props){
    super(props);

    
  }
  


  render(){
    return(
      <div>
        <Header/>
         <SearchFromTheSite />
          
        <Footer/>
      </div>
    )
  }
}