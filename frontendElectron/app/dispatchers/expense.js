import { xHttpRequest } from './dispatcher';
import { api } from '../config/constants';
import Cache from '../utils/cache';
import ExpenseStore from '../stores/expense'

let ExpenseDispatcher = {

    getAll: () => {

        var params = {
            card: Cache.get('card_selected')
        };
        
        success(data) => {
            data.map((expense) => ExpenseStore.create(expense));
        }

        return xHttpRequest('GET', [api.expenses, null, params], [success]);
    },

    create: (expense) => {
        
        success(data) => {
            ExpenseStore.create(data)
        }

        return xHttpRequest('POST', [api.expenses, expense], [success]);
    }
};

export default ExpenseDispatcher;
