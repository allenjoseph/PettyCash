import React from 'react';

export let Container = React.createClass({
    render(){
        return (
            <div className="container"> {this.props.children} </div>
        );
    }
});

export let PageHeader = React.createClass({
    render(){
        
        var styles = {
            marginTop: '50px'
        };
        
        return (
            <div className="page-header" style={styles} > 
                {this.props.children} 
            </div>
        );
    }
});

export let Row = React.createClass({
   render(){
        if(this.props.columns){
           return (
                <div className="row">
                    {this.props.children}
                </div>
           );
        }
        return (
            <div className="row">
                <div className="col-lg-12">
                    {this.props.children}
                </div>
            </div>
        );
   } 
});

export let NavBar = React.createClass({
    render(){
        
        let styles = {
            marginBottom: 0
        };
        
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={styles}>
                <div className="container"> 
                    {this.props.children}
                </div>
            </nav>
        );
    }
});

export let NavBarHeader = React.createClass({
    render(){
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
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
    render(){
        return (
            <div className="navbar-collapse collapse">
                {this.props.children}
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

export let Form = React.createClass({
   render(){
        if(this.props.orientation === 'vertical'){
            return ( <form className="form-vertical">{this.props.children}</form> );
        }
        return (
            <div className="form-horizontal">
                <fieldset>
                    {this.props.children}
                </fieldset>
            </div>
        );
   } 
});

export let FormGroup = React.createClass({
    render(){
        
        let Label, 
            colSize;
        
        if(this.props.label !== undefined){
            Label = <label className="col-sm-2 control-label">{this.props.label}</label>;
            colSize = 'col-sm-10';
        }else{
            colSize = 'col-sm-12';
        }

        if(this.props.size){
            colSize = 'col-sm-' + this.props.size;
        }
        
        return (
            <div className="form-group">
                {Label}
                <div className={colSize}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export let Well = React.createClass({
    render(){
        return (
            <div className="well">
                {this.props.children}
            </div>
        );
    }
});