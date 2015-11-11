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

    render(){
        let addForm,
            title = 'Gastos',
            url = 'tickets',
            columns = {
                date: 'Fecha',
                description: 'Descripcion',
                amount: 'Cantidad',
                unitPrice: 'Precio unitario',
                totalPrice: 'Precio total'
            };

        if(this.state.showAddForm){
            addForm = <Row>
                        <TicketAddForm close={this.closeAddForm} token={this.props.token}/>
                        <hr/>
                    </Row>;
        }

        return(
            <Container>
                <PageHeader>
                    <Row>
                        <h1>
                            {title}
                            <a href="#" className="btn btn-success pull-right" onClick={this.openAddForm}>Agregar</a>
                        </h1>
                    </Row>
                </PageHeader>

                {addForm}

                <Row>
                    <DataTable url={url} token={this.props.token} columns={columns}/>
                </Row>
            </Container>
        );
    }
});