export default {
    options: {
        tickets: 'tickets',
        legalPersons: 'legalpersons',
        stadistics: 'stadistics',
        ruc: 'ruc'
    },
    titles:{
        tickets: 'Gastos',
        stadistics: 'Estadisticas',
        ruc: 'Consulta RUC'
    },
    api: {
        auth: 'http://localhost:8000/api-token-auth/',
        tickets: 'http://127.0.0.1:8000/' + this.options.tickets + '/',
        legalPersons: 'http://127.0.0.1:8000/legalpersons/' + this.options.legalPersons + '/',
    },
    dataTableLangEs : {
        'sProcessing': 'Procesando...',
        'sLengthMenu': 'Mostrar _MENU_ registros',
        'sZeroRecords': 'No se encontraron resultados',
        'sEmptyTable': 'Ningún dato disponible en esta tabla',
        'sInfo': '',
        //'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty': '',
        //'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix': '',
        'sSearch': 'Buscar:',
        'sUrl': '',
        'sInfoThousands': ',',
        'sLoadingRecords': 'Cargando...',
        'oPaginate': {
            'sFirst': 'Primero',
            'sLast': 'Último',
            'sNext': 'Siguiente',
            'sPrevious': 'Anterior'
        },
        'oAria': {
            'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
            'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
    },
    dataTableColumns : {
        tickets: {
            date: 'Fecha',
            description: 'Descripcion',
            amount: 'Cantidad',
            unitPrice: 'Precio unitario',
            totalPrice: 'Precio total'
        }
    }
};