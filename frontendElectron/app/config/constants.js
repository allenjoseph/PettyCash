let root = 'http://pettycash.allenjoseph.pe/api';

export let api = {
    auth: root + '/api-token-auth/',
    verify: root + '/api-token-verify/',
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
        expenses: 'Gastos'
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
            date: {name: 'Fecha', style: 'col-sm-3'},
            description: {name: 'Descripcion', style: 'col-sm-5'},
            total_price: {name: 'Precio total', style: 'col-sm-2 text-right'}
        }
    },
    currencies : [
        {id: 0, name: 'Nuevo Sol'},
        {id: 1, name: 'Dolar Estadounidense'},
        {id: 2, name: 'Euro'}
    ],
    installmentsRange : [0,1,2,3,4,5,6,7,8,9].map(function(elem){
        return { id: elem + 1, name: elem + 1 };
    }),
    remindMe : [
        {id: 0, name: 'Nunca'},
        {id: 1, name: 'Diariamente'},
        {id: 2, name: 'Semanalmente'},
        {id: 3, name: 'Quincenalmente'},
        {id: 4, name: 'Mensualmente'},
        {id: 5, name: 'Anualmente'}
    ],
};
