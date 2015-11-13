import React from 'react';
import update from 'react-addons-update';
import Dispatcher from '../../dispatchers/dispatcher';
import { Form, FormGroup } from '../commons/Layout';

export default React.createClass({

    getInitialState() {
        return {
            name: '',
            ruc: ''
        };
    },

    updateValue(e){
        let newState = {};
        newState[e.target.name] = { $set: e.target.value };
        this.setState(update(this.state, newState));
    },

    save(){
        Dispatcher.addLegalPerson(this.state, this.props.token)
        .done((legalPerson)=>{
            this.props.addLegalPerson(legalPerson);
        }.bind(this))
        .fail(()=>{
            //error
        }.bind(this));
    },

    render(){
        return(
            <Form>
            
                <div className="form-group">
                    <label className="col-sm-2 control-label">Ruc</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Ruc" name="ruc"
                        value={this.state.ruc} onChange={this.updateValue}/>
                    </div>
                </div>

                <FormGroup label="Nombre">
                    <input type="text" className="form-control" placeholder="Nombre" name="name"
                    value={this.state.name} onChange={this.updateValue}/>
                </FormGroup>
                
                
                <FormGroup label="">
                    <button type="button" className="btn btn-primary" 
                    onClick={this.save}>Guardar</button>
                </FormGroup>
                
            </Form>
        );
    }
});