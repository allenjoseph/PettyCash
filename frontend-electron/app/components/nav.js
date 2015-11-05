import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            expenses: true 
        };
    },
    render(){
        return(
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html"><i className="fa fa-book fa-fw"></i> Petty Cash</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i> Daniela <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="javascript:void(0)"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>

                    </li>
                </ul>

                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                            <li>
                                <a href="javascript:void(0)" className={this.state.expenses ? 'active' : ''}>
                                    <i className="fa fa-usd fa-fw"></i> Gastos
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i className="fa fa-bar-chart-o fa-fw"></i> Estadisticas</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i className="fa fa-child fa-fw"></i> Consulta RUC</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});