import ExpenseDispatcher from '../dispatchers/expense';

let ExpenseActions = {
    
    getAll: () => ExpenseDispatcher.getAll(),
    
    add: (expense) =>  ExpenseDispatcher.add(expense)
};

export default ExpenseActions;