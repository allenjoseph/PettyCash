var $ = require('jquery');
import Constants from '../config/constants';

export default {
    login(credentials){
        return new Promise((resolve, reject) => {
            $.post(Constants.api.auth, credentials)
            .done((auth) => {
                resolve(auth);
            })
            .fail(() => {
                reject();
            });
        });
    },
    getData(name, token){
        var url = Constants.api[name];
        return $.ajax({
            type: 'GET',
            url: url + '?format=json',
            
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
