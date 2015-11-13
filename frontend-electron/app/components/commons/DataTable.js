import React from 'react';
import ReactDOM from 'react-dom';
import Constants from '../../config/constants';
import $ from 'jquery';
import Moment from 'moment';

require('datatables-bootstrap3-plugin');

export default React.createClass({
    
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

        let rowsValues = this.props.data.map(function(elem){

            let dataColumns = columnsKeys.map(function(key){
                let value = elem[key];
                if(key === 'created_date'){
                    value = Moment(value).format('DD/MM/YYYY');
                }
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