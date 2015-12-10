import { xHttpRequest } from './dispatcher';
import { api } from '../config/constants';
import Cache from '../utils/cache';

let GeneralDispatcher = {
    
    login: (credentials) => {
        
        let success = (data) => {
            if(data.token){
                Cache.set('token', data.token);
                Cache.set('card_selected', data.cards[0]);
            }
        }
        
        return xHttpRequest('POST', [api.auth, credentials], [success]);
    } 
};

export default GeneralDispatcher;