var $ = require('jquery');
import { api } from '../config/constants';
import Cache from '../utils/cache';

export default {

    login(credentials){
        return $.post(api.auth, credentials);
    },

    getData(url){
        
        var token = Cache.get('token');
        var card = Cache.get('card_selected');
        
        if(card && card.id){
            url += '?card=' + card.id;
        }
        
        return $.ajax({
            type: 'GET',
            url: url + '&format=json',
            
            beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            },
        });
    },

    postData(url, data){
        
        var token = Cache.get('token');
        
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            
            beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            },
        });
    }
};
