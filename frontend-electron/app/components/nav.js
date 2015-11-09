import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            expenses: true 
        };
    },
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={{marginBottom: 0}}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="javascript:void(0)"><i className="fa fa-book fa-fw"></i> Petty Cash</a>
                    </div>

                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
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
                                <a href="javascript:void(0)"><i className="fa fa-child fa-fw"></i> Consulta RUC</a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" aria-expanded="false">
                                    <i className="fa fa-user fa-fw"></i> Daniela <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="javascript:void(0)"><i className="fa fa-sign-out fa-fw"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});