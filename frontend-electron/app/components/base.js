import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Nav from './nav';
import Content from './content';

let Wrapper = React.createClass({
    getInitialState() {
        return {
            valid: false
        };
    },
    logIn(){
        this.setState({
            valid: true
        });
    },
    render(){
        if(this.state.valid)
            return (
                <div>
                    <Nav/>
                    <Content/>
                </div>
            );
        else
            return <Login logIn={this.logIn}/>;
    }
});

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));