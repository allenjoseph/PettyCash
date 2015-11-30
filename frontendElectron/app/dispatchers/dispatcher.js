var $ = require('jquery');
import Constants from '../config/constants';
import Cache from '../utils/cache';

export default {

    login(credentials){
        return $.post(Constants.api.auth, credentials);
    },

    getData(ref, token){
        debugger;
        var url = Constants.api[ref];
        var card = Cache.get('card_selected');
        
        return $.ajax({
            type: 'GET',
            url: url + '?card=' + card.id + '&format=json',
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },

    addData(url, data, token){
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    addLegalPerson(legalPerson, token){
        return this.addData(Constants.api.legalPersons, legalPerson, token);
    },
    addTicket(ticket, token){
        return this.addData(Constants.api.tickets, ticket, token);
    }
};
