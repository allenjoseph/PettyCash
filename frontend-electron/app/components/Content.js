import React from 'react';
import DataTable from './commons/DataTable';
import TicketAddForm from './tickets/TicketAddForm';
import { Container, PageHeader, Row } from './commons/Layout';
import Dispatcher from '../dispatchers/dispatcher';
import update from 'react-addons-update';

export default React.createClass({

    getInitialState: function() {
        return {
            showAddForm: false,
            data: []
        };
    },

    componentDidMount() {
        this.loadData();
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

    loadData(){

        Dispatcher.getData(this.props.option, this.props.token)
        
        .done(function(data){
            
            this.setState(update(this.state, {
                data: {$set: data}
            }));

        }.bind(this))

        .fail(function(){

        }.bind(this));
    },
    
    addNewRecord(record){
        
        this.setState(update(this.state, {
            showAddForm: {$set: false},
            data: {$push: [record]}
        }));
    },

    render(){
        let addForm;

        if(this.state.showAddForm){
            addForm = <Row>
                        <TicketAddForm close={this.closeAddForm} token={this.props.token} addNewRecord={this.addNewRecord}/>
                        <hr/>
                    </Row>;
        }

        return(
            <Container>
                <PageHeader>
                    <Row>
                        <h1>
                            {this.props.title}
                            <a href="#" className="btn btn-success pull-right" onClick={this.openAddForm}>Agregar</a>
                        </h1>
                    </Row>
                </PageHeader>

                {addForm}

                <Row>
                    <DataTable data={this.state.data} option={this.props.option} token={this.props.token}/>
                </Row>
            </Container>
        );
    }
});