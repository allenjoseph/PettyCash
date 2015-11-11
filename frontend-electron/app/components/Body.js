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
            validAuth: false,
            badCredentials: false,
            token: ''
        };
    },

    logIn(credentials){
        Dispatcher.login(credentials)
        
        .then((auth)=>{

            let newState = update(this.state, {
                validAuth: {$set: true},
                token: {$set: auth.token}
            });
            this.setState(newState);

        }.bind(this), (e)=>{

            let newState = update(this.state, {
                badCredentials: {$set: true}
            });
            this.setState(newState);
        
        }.bind(this));
    },

    render(){
        if(this.state.validAuth){
            return (
                <div>
                    <Nav token={this.state.token}/>
                    <Content token={this.state.token}/>
                </div>
            );
        }
        return <Login logIn={this.logIn} badCredentials={this.state.badCredentials}/>;
    }
});

ReactDOM.render(<Body/>, document.getElementById('wrapper'));