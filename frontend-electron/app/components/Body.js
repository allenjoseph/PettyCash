import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Nav from './Nav';
import Content from './Content';
import update from 'react-addons-update';
import Dispatcher from '../dispatchers/dispatcher';

let Body = React.createClass({

    getInitialState() {
        return {
            token: ''
        };
    },

    loginSuccess(token){
        
        this.setState(update(this.state, {
            token: {$set: token}
        }));
        
    },

    render(){
        if(this.state.token){
            return (
                <div>
                    <Nav token={this.state.token}/>
                    <Content token={this.state.token}/>
                </div>
            );
        }else{
            return <Login loginSuccess={this.loginSuccess}/>;
        }
    }
});

ReactDOM.render(<Body/>, document.getElementById('wrapper'));