import React from 'react';
import DataTable from './commons/dataTable';
import Constants from './commons/constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                            <div className="well">
                                <form className="form-horizontal">
                                    <fieldset>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <a href="#" className="btn btn-link pull-right" onClick={this.closeAddForm}>Cancelar y Cerrar</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Codigo recibo</label>
                                            <div className="col-sm-4">
                                                <input type="text" className="form-control" placeholder="Codigo recibo" onChange={this.changeUsername} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Descripcion</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Descripcion" onChange={this.changeUsername} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Proveedor</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Proveedor" onChange={this.changeUsername} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Precio Total</label>
                                            <div className="col-sm-4">
                                                <input type="text" className="form-control" placeholder="Precio Total" onChange={this.changePassword}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-10 col-sm-offset-2">
                                                <button type="button" className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
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

                <ReactCSSTransitionGroup transitionName="carousel" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {addForm}
                </ReactCSSTransitionGroup>

                <div className="row">
                    <div className="col-lg-12">
                        <DataTable url={url} token={this.props.token} columns={columns}/>
                    </div>
                </div>
            </div>
        );
    }
});