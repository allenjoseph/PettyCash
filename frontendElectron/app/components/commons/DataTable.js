import React from 'react';
import ReactDOM from 'react-dom';
import Constants from '../../config/constants';
import Dates from '../../utils/dates';
import update from 'react-addons-update';
import $ from 'jquery';
import _ from 'lodash';

require('datatables-bootstrap3-plugin');

export default React.createClass({

    getInitialState(){
        return {
            headerColumns: this.getHeaderColumns(),
            records: []
        }
    },

    componentWillReceiveProps(nextProps) {

        if(nextProps.dataChanged){

            this.setState(update(this.state, {
                records: {$set: this.getRecords(nextProps.data)}
            }));
        }
    },

    componentWillUpdate: function(nextProps, nextState) {
        if(nextProps.dataChanged){

            let $table = $(ReactDOM.findDOMNode(this.refs.dataTable));

            $table.dataTable().fnDestroy();
        }
    },

    componentDidUpdate(){
        if(this.props.dataChanged){

            let $table = $(ReactDOM.findDOMNode(this.refs.dataTable));
            
            $table.dataTable({
                language: Constants.dataTableLangEs,
                retrieve: true,
                columns: this.state.headerColumns.map((col) => {
                    return col.key === 'actions' ? { orderable: false } : null;
                })
            });
        }
    },

    getHeaderColumns(){
        let columns = [];
        let columnsStyle = Constants.dataTableColumns[this.props.option];

        columns = _.map(columnsStyle, (col, key) => {
            return {
                key: key, 
                styleClass: col.style, 
                value: col.name
            };
        });

        columns.push({
            key: 'actions', 
            styleClass: 'col-sm-2 text-center', 
            value: 'Acciones'
        });

        return columns;
    },

    getRecords(data){
        let records = [];
        let columnsStyle = Constants.dataTableColumns[this.props.option];

        records = _.map(data, (record, recordKey) => {

            record.columns = _.map(columnsStyle, (col, colKey) => {
                let value = record[colKey];

                if(['created_date', 'date'].indexOf(colKey) > -1){
                    value = Dates.format(value,'DD/MM/YYYY');
                }

                return {
                    key: colKey,
                    styleClass: col.style,
                    value: value
                };
            });

            return record;
        });

        return records;
    },

    render(){
        return(
            <table ref="dataTable" className="table table-condensed table-hover">
                <thead>
                    <tr className="info">
                        {this.state.headerColumns.map((col) => 
                            <th key={col.key} className={col.styleClass} style={{borderBottom: 'none'}}>{col.value}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.state.records.map((record) => 
                        <tr key={record.id} style={{cursor:'pointer'}} className="active">
                            { record.columns.map((col) => 
                                <td key={col.key} className={col.styleClass}>{col.value}</td>
                            )}
                            <td key="actions" className="col-sm-2 text-center">
                                <button className="btn btn-link" style={{padding:'0 5px'}}>
                                    <i className="fa fa-pencil fa-lg"></i>
                                </button>
                                <button className="btn btn-link" style={{padding:'0'}}>
                                    <i className="fa fa-trash-o fa-lg"></i>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
});