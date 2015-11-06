import React from 'react';
import DataTable from './commons/dataTable';

export default React.createClass({
    render(){
        let title = 'Gastos',
            url = 'http://127.0.0.1:8000/tickets/?format=json',
            columns = {
                date: 'Fecha',
                description: 'Descripcion',
                amount: 'Cantidad',
                unitPrice: 'Precio unitario',
                totalPrice: 'Precio total'
            };

        return(
            <div className="container">
                <div className="page-header" style={{marginTop: '50px'}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>
                                {title}
                                <a href="#" className="btn btn-success pull-right">Agregar</a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <DataTable url={url} columns={columns}/>
                    </div>
                </div>
            </div>
        );
    }
});