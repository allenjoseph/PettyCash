import Dispatcher from '../dispatchers/dispatcher';
import { api } from '../config/constants';
import Store from '../stores/expense'

var ExpenseAction = {
    
    getAll: () => {
        var xhr = Dispatcher.getData(api.expenses);
        
        xhr.done((data) => {
            data.map((expense) => Store.create(expense));
        });
        
        xhr.fail(()=> console.error('request fail'));
    },
    
    add: (expense) => {
        var xhr = Dispatcher.postData(api.expenses, expense);
        
        xhr.done((data) => {
            Store.create(data);
        });
        
        xhr.fail(()=> console.error('request fail'));
    }
};

export default ExpenseAction;