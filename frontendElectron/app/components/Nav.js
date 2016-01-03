import React from 'react';
import { NavBar, NavBarCollapse, NavBarContent } from './commons/NavBar';
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

    logout() {
        Cache.clear();
    },

    render() {

        let data = {
            menu: {icon: 'user', text: Cache.get('username')},
            items: [{icon: 'sign-out', text: 'Logout', onClick: this.logout}]
        };

        return(
            <NavBar>
                <NavBarCollapse title="Petty Cash" icon="book">
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
                        <Dropdown data={data} />
                    </NavBarContent>

                </NavBarCollapse>
            </NavBar>
        );
    }
});