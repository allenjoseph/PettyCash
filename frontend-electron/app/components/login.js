import React from 'react';

export default React.createClass({
    render(){
        return(
            <h1>Login <a onClick={this.props.logIn}>Log in</a></h1>
        );
    }
});