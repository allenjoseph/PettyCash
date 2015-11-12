import React from 'react';
import ReactDOM from 'react-dom';
import Constants from '../../config/constants';
import $ from 'jquery';
import Dispatcher from '../../dispatchers/dispatcher';

require('datatables-bootstrap3-plugin');

export default React.createClass({
    
    getInitialState: function() {
        return {
            rows: [] 
        };
    },
    
    loadData(){

        Dispatcher.getData(this.props.ref, this.props.token)
        
        .done(function(data){
            this.setState({ rows: data });
        }.bind(this))

        .fail(function(){

        }.bind(this));
    },
    
    componentDidMount() {
        this.loadData();
    },
    
    componentDidUpdate: function() {
        let $table = $(ReactDOM.findDOMNode(this.refs.dataTable));
        $table.dataTable({
            language: Constants.dataTableLangEs,
            retrieve: true,
            fnDrawCallback: function(){
                this.forceUpdate();
            }.bind(this)
        });
    },
    
    render(){

        let columnsKeys = [],
            columnsNames = [],
            columns = Constants.dataTableColumns[this.props.option];

        for(var key in columns){
            if(columns.hasOwnProperty(key)){
                columnsKeys.push(key);
                let name = columns[key];
                columnsNames.push(<th key={key}>{name}</th>);
            }
        }

        let rowsValues = this.state.rows.map(function(elem){

            let dataColumns = columnsKeys.map(function(key){
                let value = elem[key];
                return <td key={key}>{value}</td>;
            });

            return <tr key={elem.id} style={{cursor:'pointer'}}>{dataColumns}</tr>;
        });

        return(
            <table ref="dataTable" className="table table-striped table-bordered table-hover">
                <thead>
                    <tr className="info">
                        {columnsNames}
                    </tr>
                </thead>
                <tbody>
                    {rowsValues}
                </tbody>
            </table>
        );
    }
});