import React from 'react';
import Select from '../commons/Select';
import LegalPersonAddForm from '../legal-persons/LegalPersonAddForm';
import update from 'react-addons-update';
import ExpenseActions from '../../actions/expense';
import Constants from '../../config/constants';
import { Form, FormGroup } from '../commons/Layout';

export default React.createClass({

    getInitialState() {
        return {
            expense : {
                date: new Date(),
                description: '',
                total_price: 0,
                category: null,
                number: '',
                legal_person: null,
                repeat: false,
                currency: 'PEN',
                exchange: 0,
                card: '',
                installments: 1,
            },
            showLegalPerson: false,
            legalPersons: [],
            categories: [],
            installmentsRange: [0,1,2,3,4,5,6,7,8,9].map(function(elem){
                return { id: elem + 1, name: elem + 1 };
            }),
            currencies: [
                {id: 'PEN', name: 'Nuevo Sol'},
                {id: 'USD', name: 'Dolar Estadounidense'},
                {id: 'EUR', name: 'Euro'}
            ]
        };
    },

    componentWillMount: function() {
        this.loadLegalPersons();
        this.loadCategories();
    },

    loadLegalPersons(){

        /*ExpenseDispatcher.getData(Constants.options.legalPersons)
        .done(function(data){
            this.setState(update(this.state, {
               legalPersons: {$set: data || []}
            }));
        }.bind(this));*/
    },

    loadCategories(){

        /*ExpenseDispatcher.getData(Constants.options.categories)
        .done(function(data){
            this.setState(update(this.state, {
               categories: {$set: data || []}
            }));
        }.bind(this));*/
    },

    updateStateValue(e){
        debugger;
        let newState = {};
        newState[e.target.name] = { $set: e.target.value };

        this.setState(update(this.state, newState));
    },

    updateExpenseValue(e){
        let newState = { expense : {} };
        newState.expense[e.target.name] = { $set: e.target.value };

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
        var action = ExpenseActions.create(this.state.expense)
        
        action.done(() => {
            this.setState(this.getInitialState());
            this.props.updateData();
        }.bind(this));
    },

    render(){
        let legalPersonForm, showLegalPersonButton;
        let isBill = false;

        if(this.state.showLegalPerson){
            
            showLegalPersonButton = <a href="javascript:void(0)" className="btn btn-link" 
                                    onClick={this.closeAddLegalPerson}>Cerrar</a>;

            legalPersonForm = <FormGroup>
                                <LegalPersonAddForm addLegalPerson={this.addLegalPerson}/>
                                <hr/>
                            </FormGroup>;
        }

        return(
            <div className="well">
                <Form>
                    <FormGroup>
                        <h3 style={{marginTop:0}}>GASTO
                            <a href="javascript:void(0)" className="btn btn-link pull-right" onClick={this.props.close}>Cancelar y Cerrar</a>
                        </h3>
                    </FormGroup>
                    
                    { !isBill ? '' : 
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Codigo recibo</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Codigo recibo" 
                                name="number" value={this.state.expense.number} onChange={this.updateExpenseValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                    }
                    
                    <FormGroup label="Descripcion">
                    
                        <input type="text" className="form-control" placeholder="Descripcion" 
                        name="description" value={this.state.expense.description} onChange={this.updateExpenseValue}
                        disabled={this.state.showLegalPerson}/>
                        
                    </FormGroup>
                    
                    { !isBill ? '' : 
                        <FormGroup label="Proveedor">

                                <Select placeholder="Seleccione un Proveedor" style="form-control" 
                                name="legal_person" value={this.state.expense.legal_person} onChange={this.updateExpenseValue}
                                data={this.state.legalPersons} disabled={this.state.showLegalPerson}/>

                                <a href="javascript:void(0)" className="btn btn-link" disabled={this.state.showLegalPerson}
                                onClick={this.openAddLegalPerson}>Agregar Proveedor</a>
                                
                                {showLegalPersonButton}
                                
                        </FormGroup>
                    }

                    { !isBill ? '' : legalPersonForm }
                    
                    <div className="form-group">

                        { !isBill ? '' : 
                            <div>
                                <label className="col-sm-2 control-label">Categoria</label>
                                <div className="col-sm-4">
                                    <Select placeholder="Sin categorizar" style="form-control" 
                                    name="category" value={this.state.expense.category} onChange={this.updateExpenseValue}
                                    data={this.state.categories} disabled={this.state.showLegalPerson}/>
                                </div>
                            </div>
                        }
                        
                        <label className="col-sm-2 control-label">
                            <strong>Precio Total</strong>
                        </label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Precio Total" 
                            name="total_price" value={this.state.expense.total_price} onChange={this.updateExpenseValue}
                            disabled={this.state.showLegalPerson}/>
                        </div>
                    
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Moneda</label>
                        <div className="col-sm-4">
                            <Select style="form-control" name="currency" 
                            value={this.state.expense.currency} onChange={this.updateExpenseValue}
                            data={this.state.currencies} disabled={this.state.showLegalPerson}/>
                        </div>
                        <label className="col-sm-2 control-label">
                            <strong>Cambio</strong>
                        </label>
                        <div className="col-sm-4">
                            <input type="text" name="exchange" value={this.state.expense.exchange}
                            onChange={this.updateExpenseValue}/>
                        </div>
                    </div>
                    
                    <FormGroup label="Cuotas" size="4">

                        <Select style="form-control" name="installments" 
                        value={this.state.expense.installments} onChange={this.updateExpenseValue}
                        data={this.state.installmentsRange} disabled={this.state.showLegalPerson}/>
                            
                    </FormGroup>

                    <FormGroup label="">
                    
                        <button type="button" className="btn btn-primary pull-right" onClick={this.save}
                        disabled={this.state.showLegalPerson}>Guardar</button>
                            
                    </FormGroup>
                        
                </Form>
            </div>
        );
    }
});