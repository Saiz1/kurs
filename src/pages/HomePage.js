import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.js';
import '../index.css';
import Header from '../components/header.js';
import Footer from '../components/footer';


export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
     
    };
  }
 


  render() {
    return (
      <div className="app">
        <Header />
       <div class="title-div">
       <h2 id="blink2">Keeping London moving - Transport for London</h2>
       
       </div>

       <div className="about-task">
       <h2>About</h2>
       <div id="about-container">
       <div className="about-me">
       <h2>Обо мне</h2>
       <p>Являюсь студентом 2-его курса БрГТУ, факультета электронно-информационных систем.</p>
       </div>
       
       <div className="about-api">
       <h2>Задание</h2>
       <p>Веб-сервис с возможностью просмотра загрузки зон (веток) метрополитена, расписания движения и текущего положения общественного транспорта в реальном времени. Адаптация интерфейса под различные размеры и ориентации экранов, а также для мобильных устройств.</p>
       </div>
       </div>
       </div>
        <Footer />
        
      </div>
    );
  }
}

