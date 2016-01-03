import React from 'react';
import update from 'react-addons-update';

export let NavBar = React.createClass({
    render(){
        
        let styles = {
            marginBottom: 0
        };
        
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={styles}>
                {this.props.children}
            </nav>
        );
    }
});

export let NavBarHeader = React.createClass({
    render(){
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" 
                data-target=".navbar-collapse" onClick={this.props.toggle}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="javascript:void(0)">
                    {this.props.children}
                </a>
            </div>
        );
    }
});

export let NavBarCollapse = React.createClass({

    getInitialState: function() {
        return {
            open: false
        };
    },

    toggle(){
        this.setState(update(this.state, {
            open: {$set : !this.state.open}
        }));
    },

    render(){
        return (
            <div className="container">
                <NavBarHeader toggle={this.toggle}>
                    <i className={'fa fa-fw fa-' + this.props.icon}></i>
                    <strong>{this.props.title}</strong>
                </NavBarHeader>
                <div className={'navbar-collapse collapse' + (this.state.open ? ' in' : '')}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export let NavBarContent = React.createClass({
    render(){
        let orientation = this.props.orientation ? 'navbar-' + this.props.orientation : '';
        return (
            <ul className={'nav navbar-nav ' + orientation}>
                {this.props.children}
            </ul>
        );
    }
});