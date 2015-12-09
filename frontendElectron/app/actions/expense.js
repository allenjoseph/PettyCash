import ExpenseDispatcher from '../dispatchers/expense';

let ExpenseActions = {
    
    getAll: () => ExpenseDispatcher.getAll(),
    
    add: (expense) =>  ExpenseDispatcher.create(expense)
};

export default ExpenseActions;