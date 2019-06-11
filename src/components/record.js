import React from 'react';
import {Link} from 'react-router-dom';
import recordObj from '../sharedObjects/recordObj.js';

export default class Record extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      searchItems: undefined
    };
  }


    getSearchTemplate = () => {
        let searchTemplate = [];
        if (this.props.searchItems) {
            const matches = this.props.searchItems.matches;

            for (let i = 0; matches[i]; i++) {
                searchTemplate[i] = <div key={i} className="news"><h2 className="news-name">{matches[i].name}</h2><p className="score">Score {matches[i].score.toFixed(2) * 10}/10</p>
                <Link onClick={() => {
                  recordObj.name = matches[i].name;
                  recordObj.highlights = matches[i].highlights;
                  recordObj.score = matches[i].score;
                }} 
                to="/records"><button className="read-more">Read More</button></Link></div>
              }
            return searchTemplate;
        }
        else {
            return <div></div>
        }
    }


  render(){



    return(
      <React.Fragment>
        {this.getSearchTemplate()}
      </React.Fragment>
    )
  }
}