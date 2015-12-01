var $ = require('jquery');
import { api } from '../config/constants';
import Cache from '../utils/cache';

export function xHttpRequest (type, url, params, data){
    
    Object.assign(params || {}, { format: 'json' });
    
    return $.ajax({
        
        type: type || 'GET',
        url: url + '?' + $.param(params),
        data: data,
        
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', 'JWT ' + Cache.get('token'));
        },
    });
}

export default {

    login: (credentials) => {
        return $.post(api.auth, credentials);
    }
};
