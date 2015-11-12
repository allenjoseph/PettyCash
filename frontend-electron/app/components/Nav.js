import React from 'react';
import { NavBar, Container, NavBarHeader, NavBarCollapse, NavBarContent } from './commons/Layout';

export default React.createClass({
    getInitialState() {
        return {
            expenses: true
        };
    },
    render(){
        return(
            <NavBar>
                <NavBarHeader>
                    <i className="fa fa-book fa-fw"></i>
                    <strong>Petty Cash</strong>
                </NavBarHeader>

                <NavBarCollapse>
                    <NavBarContent>
                        <li className={this.state.expenses ? 'active' : ''}>
                            <a href="javascript:void(0)">
                                <i className="fa fa-usd fa-fw"></i> Gastos
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="fa fa-bar-chart-o fa-fw"></i> Estadisticas
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="fa fa-child fa-fw"></i> Consulta RUC
                            </a>
                        </li>
                    </NavBarContent>

                    <NavBarContent orientation="right"> 
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" aria-expanded="false">
                                <i className="fa fa-user fa-fw"></i> Daniela <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-sign-out fa-fw"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </NavBarContent>
                </NavBarCollapse>
            </NavBar>
        );
    }
});