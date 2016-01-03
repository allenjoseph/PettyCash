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