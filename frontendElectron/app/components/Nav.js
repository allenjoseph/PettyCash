import React from 'react';
import { NavBar, Container, NavBarHeader, NavBarCollapse, NavBarContent } from './commons/Layout';
import Constants from '../config/constants';
import _ from 'lodash';
import Cache from '../utils/cache';
import Dropdown from './commons/Dropdown';

export default React.createClass({
    getInitialState() {
        return {
            expenses: true
        };
    },
    render() {

        return(
            <NavBar>
                <NavBarHeader>
                    <i className="fa fa-book fa-fw"></i>
                    <strong>Petty Cash</strong>
                </NavBarHeader>

                <NavBarCollapse>
                    <NavBarContent>
                        {(_.keys(Constants.titles)).map((optionKey)=>{
                            return (
                                <li key={optionKey} className={this.props.option === optionKey ? 'active' : ''}>
                                    <a href="javascript:void(0)">
                                        {Constants.titles[optionKey]}
                                    </a>
                                </li>
                            );
                        },this)}
                    </NavBarContent>

                    <NavBarContent orientation="right">
                        <li className="dropdown">
                            <a className="dropdown-toggle text-uppercase" data-toggle="dropdown" href="javascript:void(0)" aria-expanded="false">
                                <i className="fa fa-user fa-fw"></i>&nbsp;
                                {Cache.get('user').username}&nbsp;
                                <span className="caret"></span>
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