import $ from 'jquery';
import { api } from '../config/constants';
import Cache from '../utils/cache';

export function xHttpRequest (type, dataRequest, callbacks){
    
    dataRequest = dataRequest || []; //[url, data, params]
    dataRequest[2] = dataRequest[2] || {};
    Object.assign(dataRequest[2], { format: 'json' });
    
    callbacks = callbacks || []; //[success, error]

    return $.ajax({

        type: type || 'GET',
        url: dataRequest[0] + '?' + $.param(dataRequest[2]),
        data: dataRequest[1],

        beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', 'JWT ' + Cache.get('token'));
        },
        
        success: (data) => {
            
            if(typeof callbacks[0] === 'function'){
                callbacks[0](data);
            }
        },
        
        error: (xhr, status) => {
            
            console.error(xhr.statusText);
            
            if(typeof callbacks[1] === 'function'){
                callbacks[1]();
            }
        }
    });
};