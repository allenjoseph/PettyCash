import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Nav from './Nav';
import Content from './Content';
import update from 'react-addons-update';
import Dispatcher from '../dispatchers/dispatcher';
import Constants from '../config/constants';

let Body = React.createClass({

    getInitialState() {
        return {
            token: '',
            option: '',
            title: ''
        };
    },

    loginSuccess(token){
        
        this.setState(update(this.state, {
            token: {$set: token},
            option: {$set: Constants.options.tickets},
            title: {$set: Constants.titles.tickets}
        }));
        
    },

    render(){
        if(this.state.token){
            return (
                <div>
                    <Nav token={this.state.token} option={this.state.option}/>
                    <Content token={this.state.token} option={this.state.option}
                    title={this.state.title}/>
                </div>
            );
        }else{
            return <Login loginSuccess={this.loginSuccess}/>;
        }
    }
});

ReactDOM.render(<Body/>, document.getElementById('wrapper'));