var $ = require('jquery');
import { Api } from '../config/constants';
import Cache from '../utils/cache';

export default {

    login(credentials){
        return $.post(Api.auth, credentials);
    },

    getData(ref){
        var url = Api[ref];
        var card = Cache.get('card_selected');
        var token = Cache.get('token');
        
        return $.ajax({
            type: 'GET',
            url: url + '?card=' + card.id + '&format=json',
            
            beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },

    addData(url, data){
        var token = Cache.get('token');
        
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            
            beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    addLegalPerson(legalPerson){
        return this.addData(Api.legalPersons, legalPerson);
    },
    addTicket(ticket){
        return this.addData(Api.tickets, ticket);
    }
};
