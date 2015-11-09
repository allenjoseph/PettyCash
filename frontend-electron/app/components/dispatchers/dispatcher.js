var $ = require('jquery');
import Constants from '../commons/constants';

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
    addLegalPerson(legalPerson, token){
        return $.ajax({
            type: 'POST',
            url: Constants.api.legalPerson,
            data: legalPerson,
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    getData(url, token){
        return $.ajax({
            type: 'GET',
            url: url,
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    getLegalPersons(token){
        return this.getData(Constants.api.legalPersons,token);
    }
};
