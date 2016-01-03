import React from 'react';

export default React.createClass({

    getInitialState: function() {
        return {
            open: false
        };
    },

    render(){

        let main = {icon: 'user', text: 'Daniela'};
        let items = [{icon: 'sign-out', text: 'Logout'}];

        return(
            <li className="dropdown">
                <a className="dropdown-toggle text-uppercase" dataToggle={'dropdown'} href="javascript:void(0)" ariaExpanded={this.state.open}>
                    <i className={'fa fa-fw fa-'+main.icon}></i>&nbsp;
                    {main.text}&nbsp;
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {items.map((item) => 
                        <li>
                            <a href="javascript:void(0)">
                                <i className={'fa fa-fw fa-'+item.icon}></i>&nbsp;
                                {item.text}
                            </a>
                        </li>
                    )}
                </ul>
            </li>
        );
    }
});