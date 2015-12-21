var _expenses = {};

var ExpenseStore = {
    
    getAll: () => _expenses,
    
    get: (id) => _expenses[id],
    
    add: (expense) => {
        _expenses[expense.id] = expense;
    },
    
    update: (expense) => {
        Object.assign( _expenses[expense.id], expense );
    },
    
    remove: (id) => {
        delete _expenses[id];
    }
    
};

export default ExpenseStore;