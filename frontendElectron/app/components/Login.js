import React from 'react';
import update from 'react-addons-update';
import Dispatcher from '../dispatchers/dispatcher';
import { Container, PageHeader, Row, Well, Form, FormGroup } from './commons/Layout';

export default React.createClass({
    getInitialState() {
        return {
            credentials: {
                username:'',
                password:''
            },
            error: false
        };
    },

    changeUsername(e){
        
        this.setState(update(this.state, {
            credentials: { username: {$set : e.target.value} }
        }));
        
    },

    changePassword(e){
        
        this.setState(update(this.state, {
            credentials: { password: {$set : e.target.value} }
        }));
        
    },

    logIn(){
        
        Dispatcher.login(this.state.credentials)
        .done((data)=>{
            
            this.props.loginSuccess(data.token);
            
        }.bind(this))
        .fail(()=>{
            
            this.setState(update(this.state, {
                error: {$set: true}
            }));
            
        }.bind(this));
    },

    render(){
        let AlertError,
            disableLogIn = !this.state.credentials.username || !this.state.credentials.password;

        if(this.state.error){
            AlertError = <FormGroup>
                            <div className="alert alert-dismissible alert-danger">
                                <strong>Credenciales Invalidas!</strong> vuelve a intentarlo.
                            </div>
                        </FormGroup>;
        }

        return(
            <Container>
                <PageHeader>
                    <Row>
                        <h1>Petty Cash</h1>
                    </Row>
                </PageHeader>
                <Row>
                    <Well>
                        <Form>
                            {AlertError}
                            <FormGroup label="User">
                                <input type="text" className="form-control" placeholder="User" autoComplete="off" 
                                value={this.state.credentials.username} onChange={this.changeUsername} />
                            </FormGroup>
                            
                            <FormGroup label="Password">
                                <input type="password" className="form-control" placeholder="Password" autoComplete="off" 
                                value={this.state.credentials.password} onChange={this.changePassword}/>
                            </FormGroup>
                            
                            <FormGroup label="">
                                <button type="button" className="btn btn-primary" onClick={this.logIn} disabled={disableLogIn}>Submit</button>
                            </FormGroup>
                        </Form>
                    </Well>
                </Row>
            </Container>
        );
    }
});

