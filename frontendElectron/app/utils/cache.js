var store = {};

export default {

    get: (key) => {
        return store[key];
    },
    
    set: (key, value) => {
        store[key] = value;
    }
};