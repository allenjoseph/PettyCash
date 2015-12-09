import GeneralDispatcher from '../dispatchers/general';

let generalActions = {
    
    login : (credentials) => GeneralDispatcher.login(credentials)
};

export default generalActions;