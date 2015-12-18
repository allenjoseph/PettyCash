import React from 'react';
import DataTable from './commons/DataTable';
import ExpenseAddForm from './expenses/ExpenseAddForm';
import { Container, PageHeader, Row } from './commons/Layout';
import ExpenseStore from '../stores/expense';
import ExpenseActions from '../actions/expense';
import update from 'react-addons-update';

export default React.createClass({

    getInitialState() {
        return {
            showAddForm: false,
            data: {}
        };
    },

    componentDidMount() {
        var action = ExpenseActions.getAll();
        
        action.done(() => {
            this.setState(update(this.state, {
                data: {$set: ExpenseStore.getAll()}
            }));
        }.bind(this));
    },

    openAddForm() {
        this.setState({
            showAddForm: true
        });
    },

    closeAddForm(){
        this.setState({
            showAddForm: false
        });
    },

    updateData() {
        
        this.setState(update(this.state, {
            data: {$set: ExpenseStore.getAll()}
        }));
    },

    render() {
        let addForm;

        if(this.state.showAddForm){
            addForm = <Row>
                        <ExpenseAddForm close={this.closeAddForm} addNewRecord={this.addNewRecord}/>
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
                    <DataTable data={this.state.data} option={this.props.option}/>
                </Row>
            </Container>
        );
    }
});