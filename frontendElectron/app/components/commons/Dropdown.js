import React from 'react';
import update from 'react-addons-update';

export default React.createClass({

    getInitialState: function() {
        return {
            open: false
        };
    },

    toggle(){
        this.setState(update(this.state, {
            open: {$set : !this.state.open}
        }));
    },

    render(){
        return(
            <li className={'dropdown' + (this.state.open ? ' open' : '') }>

                <a className="dropdown-toggle text-uppercase" dataToggle={'dropdown'} href="javascript:void(0)" 
                ariaExpanded={this.state.open} onClick={this.toggle}>
            
                    <i className={'fa fa-fw fa-'+this.props.data.menu.icon}></i>&nbsp;
                    {this.props.data.menu.text}&nbsp;
                    <span className="caret"></span>
                </a>
            
                <ul className="dropdown-menu">
                    {this.props.data.items.map((item, i) => 
                        <li key={i}>
                            <a href="javascript:void(0)" onClick={item.onClick}>
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