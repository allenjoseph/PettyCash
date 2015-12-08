import { xHttpRequest } from './dispatcher';
import { api } from '../config/constants';
import Cache from '../utils/cache';
import ExpenseStore from '../stores/expense'

let Expense = {

    getAll: () => {

        var params = {
            card: Cache.get('card_selected')
        };

        var xhr = xHttpRequest(api.expenses, params);

        xhr.done((data) => {
            data.map((expense) => ExpenseStore.create(expense));
        });

        xhr.fail(()=> console.error('request fail'));
    },

    create: (expense) => {

        var xhr = xHttpRequest('POST', api.expenses, null, expense);

        xhr.done((expense) => ExpenseStore.create(expense));

        xhr.fail(()=> console.error('request fail'));
    }
};

export default Expense;
