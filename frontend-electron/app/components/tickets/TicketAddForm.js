import React from 'react';
import Select from '../commons/Select';
import LegalPersonAddForm from '../legal-persons/LegalPersonAddForm';
import update from 'react-addons-update';
import Dispatcher from '../../dispatchers/dispatcher';
import Constants from '../../config/constants';
import { Form, FormGroup } from '../commons/Layout';

export default React.createClass({

    getInitialState() {
        return {
            legalPerson : {
                number: '',
                description: '',
                legal_person: '',
                total_price: ''
            },
            showLegalPerson: false,
            legalPersons: []
        };
    },

    componentWillMount: function() {
        this.loadLegalPersons();
    },

    loadLegalPersons(){

        Dispatcher.getData(Constants.options.legalPersons, this.props.token)
        .done(function(data){
            this.setState(update(this.state, {
               legalPersons: {$set: data || []}
            }));
        }.bind(this));
    },

    updateValue(e){
        let newState = { legalPerson : {} };
        newState.legalPerson[e.target.name] = { $set: e.target.value };
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
            legal_person: {$set: legalPerson.id},
            showLegalPerson: {$set: false}
        }));
    },

    save(){
        Dispatcher.addLegalPerson(this.state.legalPerson, this.props.token)
        .done(()=>{
            this.props.updateDataTable();
        }.bind(this))
        .fail(()=>{
            //..
        }.bind(this));
    },

    render(){
        let legalPersonForm, showLegalPersonButton;

        if(this.state.showLegalPerson){
            
            showLegalPersonButton = <a href="javascript:void(0)" className="btn btn-link" 
                                    onClick={this.closeAddLegalPerson}>Cerrar</a>;

            legalPersonForm = <FormGroup>
                                <LegalPersonAddForm token={this.props.token} addLegalPerson={this.addLegalPerson}/>
                                <hr/>
                            </FormGroup>;
        }

        return(
            <div className="well">
                <Form>
                        <FormGroup>
                            <a href="javascript:void(0)" className="btn btn-link pull-right" onClick={this.props.close}>Cancelar y Cerrar</a>
                        </FormGroup>
                        
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Codigo recibo</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Codigo recibo" 
                                name="number" value={this.state.legalPerson.number} onChange={this.updateValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                        
                        <FormGroup label="Descripcion">
                        
                            <input type="text" className="form-control" placeholder="Descripcion" 
                            name="description" value={this.state.legalPerson.description} onChange={this.updateValue}
                            disabled={this.state.showLegalPerson}/>
                            
                        </FormGroup>
                        
                        <FormGroup label="Proveedor">

                                <Select placeholder="Seleccione un Proveedor" style="form-control" 
                                name="legal_person" value={this.state.legalPerson.legal_person} onChange={this.updateValue}
                                data={this.state.legalPersons} disabled={this.state.showLegalPerson}/>

                                <a href="javascript:void(0)" className="btn btn-link" disabled={this.state.showLegalPerson}
                                onClick={this.openAddLegalPerson}>Agregar Proveedor</a>
                                
                                {showLegalPersonButton}
                                
                        </FormGroup>

                        {legalPersonForm}
                        
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Precio Total</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Precio Total" 
                                name="total_price" value={this.state.legalPerson.total_price} onChange={this.updateValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                        
                        <FormGroup label="">
                        
                            <button type="button" className="btn btn-primary" onClick={this.save}
                            disabled={this.state.showLegalPerson}>Guardar</button>
                                
                        </FormGroup>
                        
                </Form>
            </div>
        );
    }
});