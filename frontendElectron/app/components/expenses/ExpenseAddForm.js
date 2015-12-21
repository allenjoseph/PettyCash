import React from 'react';
import Select from '../commons/Select';
import LegalPersonAddForm from '../legal-persons/LegalPersonAddForm';
import update from 'react-addons-update';
import ExpenseActions from '../../actions/expense';
import Constants from '../../config/constants';
import Utils from '../../config/utils';
import { Form, FormGroup } from '../commons/Layout';

export default React.createClass({

    getInitialState() {
        return {
            expense : {
                date: Utils.today(),
                description: '',
                total_price: 0,
                category: null,
                number: '',
                legal_person: null,
                repeat: 0,
                currency: 0,
                exchange: 0,
                card: 1,
                installments: 1,
            },
            showLegalPerson: false,
            legalPersons: [],
            categories: [],
            installmentsRange: Constants.installmentsRange,
            currencies: Constants.currencies,
            repeatOptions: Constants.remindMe
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

        this.state.expense.date = Utils.formatDate(this.state.expense.date);

        var action = ExpenseActions.add(this.state.expense)
        
        action.done(() => {
            this.setState(this.getInitialState());
            this.props.updateData();
        }.bind(this));
    },

    render(){
        let legalPersonForm, showLegalPersonButton;
        let isBill = undefined;

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
                    
                    { isBill && 
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Codigo recibo</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Codigo recibo" 
                                name="number" value={this.state.expense.number} onChange={this.updateExpenseValue}
                                disabled={this.state.showLegalPerson}/>
                            </div>
                        </div>
                    }

                    <FormGroup label="Fecha">
                    
                        <input type="date" className="form-control" placeholder="Fecha" 
                        name="date" value={this.state.expense.date} onChange={this.updateExpenseValue}
                        disabled={this.state.showLegalPerson}/>
                        
                    </FormGroup>

                    <FormGroup label="Descripción">
                    
                        <input type="text" className="form-control" placeholder="Descripcion" 
                        name="description" value={this.state.expense.description} onChange={this.updateExpenseValue}
                        disabled={this.state.showLegalPerson}/>
                        
                    </FormGroup>
                    
                    { isBill &&
                        <FormGroup label="Proveedor">

                                <Select placeholder="Seleccione un Proveedor" style="form-control" 
                                name="legal_person" value={this.state.expense.legal_person} onChange={this.updateExpenseValue}
                                data={this.state.legalPersons} disabled={this.state.showLegalPerson}/>

                                <a href="javascript:void(0)" className="btn btn-link" disabled={this.state.showLegalPerson}
                                onClick={this.openAddLegalPerson}>Agregar Proveedor</a>
                                
                                {showLegalPersonButton}
                                
                        </FormGroup>
                    }

                    { isBill && legalPersonForm }
                    
                    <div className="form-group">

                        { isBill && 
                            <div>
                                <label className="col-sm-2 control-label">Categoria</label>
                                <div className="col-sm-4">
                                    <Select placeholder="Sin categorizar" style="form-control" 
                                    name="category" value={this.state.expense.category} onChange={this.updateExpenseValue}
                                    data={this.state.categories} disabled={this.state.showLegalPerson}/>
                                </div>
                            </div>
                        }
                        
                        <label className="col-sm-2 control-label">Precio Total</label>
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
                        <label className="col-sm-2 control-label">Cambio</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name="exchange" 
                            value={this.state.expense.exchange} onChange={this.updateExpenseValue}/>
                        </div>
                    </div>
                    
                    <FormGroup label="Cuotas" size="4">

                        <Select style="form-control" name="installments" 
                        value={this.state.expense.installments} onChange={this.updateExpenseValue}
                        data={this.state.installmentsRange} disabled={this.state.showLegalPerson}/>
                            
                    </FormGroup>

                    <FormGroup label="Repetir gasto" size="4">

                        <Select style="form-control" name="repeat" 
                        value={this.state.expense.repeat} onChange={this.updateExpenseValue}
                        data={this.state.repeatOptions} disabled={this.state.showLegalPerson}/>

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