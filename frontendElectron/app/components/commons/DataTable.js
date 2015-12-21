import React from 'react';
import ReactDOM from 'react-dom';
import Constants from '../../config/constants';
import Dates from '../../utils/dates';
import $ from 'jquery';

require('datatables-bootstrap3-plugin');

export default React.createClass({

    componentDidUpdate(){
        let $table = $(ReactDOM.findDOMNode(this.refs.dataTable));

        $table.dataTable({

            language: Constants.dataTableLangEs,
            retrieve: true,
            
            fnDrawCallback: () => {
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

        columnsNames.push(<th key="actions" className="col-sm-2 text-center">Acciones</th>);

        for(var key in this.props.data){
            if(this.props.data.hasOwnProperty(key)){

                let dataColumns = columnsKeys.map((columnKey) => {

                    let value = (this.props.data[key])[columnKey];
                    
                    if(['created_date', 'date'].indexOf(columnKey) > -1){
                        value = Dates.format(value,'DD/MM/YYYY');
                    }

                    let col = columnsStyle[columnKey];
                    return <td key={columnKey} className={col.style}>{value}</td>;
                }.bind(this));

                dataColumns.push(<td key="actions" className="col-sm-2 text-center">
                    <button className="btn btn-link" style={{padding:'0 5px'}}>
                        <i className="fa fa-pencil fa-lg"></i>
                    </button>
                    <button className="btn btn-link" style={{padding:'0'}}>
                        <i className="fa fa-trash-o fa-lg"></i>
                    </button>
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