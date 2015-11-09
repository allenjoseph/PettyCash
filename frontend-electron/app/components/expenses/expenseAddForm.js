import React from 'react';
import Select from '../commons/select';
import LegalPersonAddForm from './legalPersonAddForm';

export default React.createClass({
    render(){
        return(
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                        <div className="row">
                            <div className="col-sm-12">
                                <a href="javascript:void(0)" className="btn btn-link pull-right" onClick={this.props.close}>Cancelar y Cerrar</a>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Codigo recibo</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Codigo recibo" onChange={this.changeNumber}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Descripcion</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Descripcion" onChange={this.changeDescription}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Proveedor</label>
                            <div className="col-sm-10">
                                <Select placeholder="Seleccione un Proveedor" style="form-control" onChange={this.changeLegalPerson}/>
                                <a href="javascript:void(0)" className="btn btn-link" onClick={this.openAddLegalPerson}>Agregar Proveedor</a>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <LegalPersonAddForm />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Precio Total</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Precio Total" onChange={this.changeTotalPrice}/>
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
        );
    }
});