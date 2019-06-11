import React, { Component } from 'react';
import Record from './record';
import getRequest from '../services/api.js';


export default class SearchFromTheSite extends React.Component {
    constructor(props) {
        super(props);
                                // при обновлении состояния идет перерисовка  компонентов;
        this.state = {
            searchItems: undefined,
        };
    }
    getSiteInfo = (e) => { // вызывается при нажатии кнопки 
        console.log('adssadadad');
        e.preventDefault();
        const searchText = e.target.elements.search.value;
        const searchURL = `https://api.tfl.gov.uk/Search?query=${searchText}`;
        getRequest(searchURL).then( 
            (result) => { // обновялется состояние -> соответсвенно идет перерисовка 
                this.setState({
                    searchItems: result,
                });
            },
        )
    };



    render() {
        return (
            <div id="search-news">
                <form onSubmit={this.getSiteInfo} id="search-site">
                    <h2>Searh TFL news and posts </h2>
                    <input type="text" id="site-search-input" name="search" required placeholder="enter what are you want... " />
                    <button>Search</button>
                </form>
                <Record searchItems={this.state.searchItems} />
            </div>
        );
    }
}

