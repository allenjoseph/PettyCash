import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Nav from './Nav';
import Content from './Content';
import update from 'react-addons-update';
import Dispatcher from '../dispatchers/dispatcher';
import Constants from '../config/constants';
import Cache from '../utils/cache';

let Body = React.createClass({

    getInitialState() {
        return {
            option: '',
            title: ''
        };
    },

    loginSuccess() {
        
        this.setState(update(this.state, {
            option: {$set: Constants.options.tickets},
            title: {$set: Constants.titles.tickets}
        }));
        
    },

    render() {
        if(Cache.get('token')){
            return (
                <div>
                    <Nav option={this.state.option}/>
                    <Content option={this.state.option}
                    title={this.state.title}/>
                </div>
            );
        }else{
            return <Login loginSuccess={this.loginSuccess}/>;
        }
    }
});

ReactDOM.render(<Body/>, document.getElementById('wrapper'));