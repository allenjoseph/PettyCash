import { xHttpRequest } from './dispatcher';
import { api } from '../config/constants';
import Cache from '../utils/cache';

let GeneralDispatcher = {
    
    login: (credentials) => {
        
        let success = (data) => {
            if(data.token){
                Cache.set('token', data.token);
                Cache.set('card', data.cards[0].id);
                Cache.set('username', data.user.username);
            }
        }
        
        return xHttpRequest('POST', [api.auth, credentials], [success]);
    },

    verify: () => {

        let token = Cache.get('token');

        if(!token) { return; }

        let fail = () => {
            Cache.clear();
        };

        xHttpRequest('POST', [api.verify, {token: token}], [undefined, fail]);
    }
};

export default GeneralDispatcher;