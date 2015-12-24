import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Nav from './Nav';
import Expenses from './expenses/Expenses';
import update from 'react-addons-update';
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
            option: {$set: Constants.options.expenses},
            title: {$set: Constants.titles.expenses}
        }));
        
    },

    render() {
        if(Cache.get('token')){
            return (
                <div>
                    <Nav option={this.state.option}/>
                    <Expenses option={this.state.option}
                    title={this.state.title}/>
                </div>
            );
        }else{
            return <Login loginSuccess={this.loginSuccess}/>;
        }
    }
});

ReactDOM.render(<Body/>, document.getElementById('wrapper'));