import React from 'react';
import update from 'react-addons-update';

export default React.createClass({
    getInitialState() {
        return {
            username:'',
            password:'' 
        };
    },

    changeUsername(e){
        var newState = update(this.state, {
            username: {$set : e.target.value}
        });
        this.setState(newState);
    },

    changePassword(e){
        var newState = update(this.state, {
            password: {$set : e.target.value}
        });
        this.setState(newState);
    },

    logIn(){
        this.props.logIn(this.state);
    },

    render(){
        let alertBadCredentials,
            disableLogIn = !this.state.username || !this.state.password;

        if(this.props.badCredentials){
            alertBadCredentials = <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="alert alert-dismissible alert-danger">
                                                <strong>Credenciales Invalidas!</strong> vuelve a intentarlo.
                                            </div>
                                        </div>
                                    </div>;
        }

        return(
            <div className="container" style={{marginTop: '50px'}}>
                <h1>Petty Cash</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="well">
                            <form className="form-horizontal">
                                <fieldset>
                                    {alertBadCredentials}
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">User</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="User" autoComplete="off" onChange={this.changeUsername} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" placeholder="Password" autoComplete="off" onChange={this.changePassword}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-10 col-sm-offset-2">
                                            <button type="button" className="btn btn-primary" onClick={this.logIn} disabled={disableLogIn}>Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

