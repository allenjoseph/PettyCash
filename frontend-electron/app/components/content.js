import React from 'react';
import DataTable from './commons/dataTable';
import Constants from './commons/constants';
import ExpenseAddForm from './expenses/expenseAddForm';

export default React.createClass({

    getInitialState: function() {
        return {
            showAddForm: false 
        };
    },

    openAddForm(){
        this.setState({
            showAddForm: true
        });
    },

    closeAddForm(){
        this.setState({
            showAddForm: false
        });
    },

    render(){
        let addForm,
            title = 'Gastos',
            url = Constants.api.tickets,
            columns = {
                date: 'Fecha',
                description: 'Descripcion',
                amount: 'Cantidad',
                unitPrice: 'Precio unitario',
                totalPrice: 'Precio total'
            };

        if(this.state.showAddForm){
            addForm = <div className="row" key="addForm">
                        <div className="col-lg-12">
                            <ExpenseAddForm close={this.closeAddForm} token={this.props.token}/>
                            <hr/>
                        </div>
                    </div>;
        }

        return(
            <div className="container">
                <div className="page-header" style={{marginTop: '50px'}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>
                                {title}
                                <a href="#" className="btn btn-success pull-right" onClick={this.openAddForm}>Agregar</a>
                            </h1>
                        </div>
                    </div>
                </div>

                {addForm}

                <div className="row">
                    <div className="col-lg-12">
                        <DataTable url={url} token={this.props.token} columns={columns}/>
                    </div>
                </div>
            </div>
        );
    }
});