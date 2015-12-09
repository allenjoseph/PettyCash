let root = 'http://localhost:8000';

export let api = {
    auth: root + '/api-token-auth/',
    expenses: root + '/expenses/',
    legalPersons: root + '/legalpersons/',
    categories: root + '/categories/'
};

export default {
    options: {
        expenses: 'expenses',
        legalPersons: 'legalPersons',
        categories: 'categories',
        stadistics: 'stadistics',
        ruc: 'ruc'
    },
    titles:{
        expenses: 'Gastos',
        stadistics: 'Estadisticas',
        ruc: 'Consulta RUC'
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
        expenses: {
            created_date: 'Fecha',
            number: 'Codigo',
            description: 'Descripcion',
            total_price: 'Precio total'
        }
    }
};