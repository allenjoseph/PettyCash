import React from 'react';
import ReactDOM from 'react-dom';
import Constants from '../../config/constants';
import Utils from '../../config/utils';
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
            rowsValues = [],
            columnsStyle = Constants.dataTableColumns[this.props.option];

        for(var key in columnsStyle){
            if(columnsStyle.hasOwnProperty(key)){

                columnsKeys.push(key);

                let col = columnsStyle[key];

                columnsNames.push(<th key={key} className={col.style}>{col.name}</th>);
            }
        }

        columnsNames.push(<th key="actions" className="text-center">Acciones</th>);

        for(var key in this.props.data){
            if(this.props.data.hasOwnProperty(key)){

                let dataColumns = columnsKeys.map((columnKey) => {

                    let value = (this.props.data[key])[columnKey];
                    
                    if(['created_date', 'date'].indexOf(columnKey) > -1){
                        value = Utils.formatDate(value,'DD/MM/YYYY');
                    }

                    let col = columnsStyle[columnKey];
                    return <td key={columnKey} className={col.style}>{value}</td>;
                }.bind(this));

                dataColumns.push(<td key="actions" className="col-sm-2">
                    <button className="btn btn-link text-info pull-right" style={{padding:'0'}}>Eliminar</button>
                    <button className="btn btn-link pull-right" style={{padding:'0'}}>Editar</button>
                </td>);

                rowsValues.push(
                    <tr key={this.props.data[key].id} style={{cursor:'pointer'}} className="active">{dataColumns}</tr>);
            }
        }

        return(
            <table ref="dataTable" className="table table-condensed table-hover">
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