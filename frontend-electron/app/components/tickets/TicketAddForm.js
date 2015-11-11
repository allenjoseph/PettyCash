import React from 'react';
import Select from '../commons/Select';
import LegalPersonAddForm from '../legal-persons/LegalPersonAddForm';
import update from 'react-addons-update';
import Dispatcher from '../../dispatchers/dispatcher';

export default React.createClass({

    getInitialState() {
        return {
            number: '',
            description: '',
            legal_person: '',
            total_price: '',
            showLegalPerson: false,
            legalPersons: []
        };
    },

    componentWillMount: function() {
        this.loadLegalPersons();
    },

    loadLegalPersons(){

        Dispatcher.getData('legalPersons', this.props.token)
        .done(function(data){
            this.setState(update(this.state, {
               legalPersons: {$set: data || []}
            }));
        }.bind(this));
    },

    updateValue(e){
        let newState = {};
        newState[e.target.name] = { $set: e.target.value };
        this.setState(update(this.state, newState));
    },

    openAddLegalPerson(){
        this.setState(update(this.state, {
            showLegalPerson: {$set: true}
        }));
    },

    closeAddLegalPerson(){
        this.setState(update(this.state, {
            showLegalPerson: {$set: false}
        }));
    },

    addLegalPerson(legalPerson){
        this.setState(update(this.state, {
            legalPersons: {$push: [legalPerson]},
            showLegalPerson: {$set: false}
        }));
    },

    save(){
        debugger;
    },

    render(){
        let legalPersonForm, showLegalPersonButton;

        if(this.state.showLegalPerson){
            
            showLegalPersonButton = <a href="javascript:void(0)" className="btn btn-link" 
                                    onClick={this.closeAddLegalPerson}>Cerrar</a>;

            legalPersonForm = <div className="form-group">
                                    <div className="col-sm-12">
                                        <LegalPersonAddForm token={this.props.token} addLegalPerson={this.addLegalPerson}/>
                                        <hr/>
                                    </div>
                                </div>;
        }

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
                                <input type="text" className="form-control" placeholder="Codigo recibo" 
                                name="number" value={this.state.number} onChange={this.updateValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Descripcion</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Descripcion" 
                                name="description" value={this.state.description} onChange={this.updateValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Proveedor</label>
                            <div className="col-sm-10">
                                <Select placeholder="Seleccione un Proveedor" style="form-control" 
                                name="legal_person" value={this.state.legal_person} onChange={this.updateValue}
                                data={this.state.legalPersons} disabled={this.state.showLegalPerson}/>

                                <a href="javascript:void(0)" className="btn btn-link" disabled={this.state.showLegalPerson}
                                onClick={this.openAddLegalPerson}>Agregar Proveedor</a>
                                
                                {showLegalPersonButton}
                            </div>
                        </div>

                        {legalPersonForm}
                        
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Precio Total</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Precio Total" 
                                name="total_price" value={this.state.total_price} onChange={this.updateValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2">
                                <button type="button" className="btn btn-primary" onClick={this.save}
                                disabled={this.state.showLegalPerson}>Guardar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
});