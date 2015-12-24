import React from 'react';
import DataTable from '../commons/DataTable';
import ExpenseAddForm from './ExpenseAddForm';
import { Container, PageHeader, Row } from '../commons/Layout';
import ExpenseStore from '../../stores/expense';
import ExpenseActions from '../../actions/expense';
import update from 'react-addons-update';
import _ from 'lodash';

export default React.createClass({

    getInitialState() {
        return {
            showAddForm: false,
            data: {},
            dataChanged: false
        };
    },

    componentDidMount() {
        var action = ExpenseActions.getAll();
        
        action.done(() => {
            this.setState(update(this.state, {
                data: {$set: ExpenseStore.getAll()},
                dataChanged: {$set: true}
            }));
        }.bind(this));
    },

    openAddForm() {
        this.setState(update(this.state, {
            showAddForm: {$set: true},
            dataChanged: {$set: false}
        }));
    },

    closeAddForm(){
        this.setState(update(this.state, {
            showAddForm: {$set: false},
            dataChanged: {$set: false}
        }));
    },

    updateData() {
        
        this.setState(update(this.state, {
            data: {$set: ExpenseStore.getAll()},
            showAddForm: {$set: false},
            dataChanged: {$set: true}
        }));
    },

    render() {

        return(
            <Container>
                <PageHeader>
                    <Row>
                        <h1>
                            {this.props.title}&nbsp;&nbsp;&nbsp;
                            <strong>{_.sum(_.pluck(this.state.data,'total_price'))}</strong>&nbsp;
                            <small><i className="fa fa-money"></i></small>
                            <a href="#" className="btn btn-success pull-right" onClick={this.openAddForm}>Agregar</a>
                        </h1>
                    </Row>
                </PageHeader>

                { this.state.showAddForm &&
                    <Row>
                        <ExpenseAddForm close={this.closeAddForm} addNewRecord={this.addNewRecord} updateData={this.updateData}/>
                        <hr/>
                    </Row>
                }

                <Row>
                    <DataTable data={this.state.data} dataChanged={this.state.dataChanged} option={this.props.option}/>
                </Row>

            </Container>
        );
    }
});