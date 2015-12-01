import ExpenseDispatcher from '../dispatchers/expense';

var ExpenseAction = {
    
    getAll: () => ExpenseDispatcher.getAll(),
    
    add: (expense) =>  ExpenseDispatcher.create(expense)
};

export default ExpenseAction;