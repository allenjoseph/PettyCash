import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Nav from './nav';
import Content from './content';
import $ from 'jquery';
import Constants from './commons/constants';
import update from 'react-addons-update';

let Wrapper = React.createClass({

    getInitialState() {
        return {
            validAuth: false,
            badCredentials: false,
            token: ''
        };
    },

    logIn(credentials){
        $.post(Constants.api.auth, credentials)
        
        .done(function(auth){

            let newState = update(this.state, {
                validAuth: {$set: true},
                token: {$set: auth.token}
            });
            this.setState(newState);

        }.bind(this))
        
        .fail(function(e){

            let newState = update(this.state, {
                badCredentials: {$set: true}
            });
            this.setState(newState);
        
        }.bind(this));
    },

    render(){
        if(this.state.validAuth)
            return (
                <div>
                    <Nav token={this.state.token}/>
                    <Content token={this.state.token}/>
                </div>
            );
        else
            return <Login logIn={this.logIn} badCredentials={this.state.badCredentials}/>;
    }
});

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));