import React from 'react';
import update from 'react-addons-update';

export default React.createClass({

    getInitialState() {
        return {
            name: '',
            ruc: '',
            tags: '', 
        };
    },

    updateValue(e){
        let newState = {};
        newState[e.target.name] = { $set: e.target.value };
        this.setState(update(this.state, newState));
    },

    save(){
        debugger;
    },

    render(){
        return(
            <div className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Nombre" name="name"
                        value={this.state.name} onChange={this.updateValue}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Ruc</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Ruc" name="ruc"
                        value={this.state.ruc} onChange={this.updateValue}/>
                    </div>
                    <label className="col-sm-1 control-label">Tags</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="Tags" name="tags" 
                        value={this.state.tags} onChange={this.updateValue}/>
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary" onClick={this.save}>Guardar</button>
                    </div>
                </div>
            </div>
        );
    }
});