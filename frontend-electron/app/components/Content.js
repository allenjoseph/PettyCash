import React from 'react';
import DataTable from './commons/DataTable';
import TicketAddForm from './tickets/TicketAddForm';
import { Container, PageHeader, Row } from './commons/Layout';

export default React.createClass({

    getInitialState: function() {
        return {
            showAddForm: false 
        };
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
    
    updateDataTable(){
        this.closeAddForm();
    },

    render(){
        let addForm;

        if(this.state.showAddForm){
            addForm = <Row>
                        <TicketAddForm close={this.closeAddForm} token={this.props.token} updateDataTable={this.updateDataTable}/>
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
                    <DataTable ref={this.props.option} token={this.props.token}/>
                </Row>
            </Container>
        );
    }
});