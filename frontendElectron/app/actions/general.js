import GeneralDispatcher from '../dispatchers/general';

let generalActions = {
    
    login : (credentials) => GeneralDispatcher.login(credentials),

    verify : () => GeneralDispatcher.verify()
};

export default generalActions;