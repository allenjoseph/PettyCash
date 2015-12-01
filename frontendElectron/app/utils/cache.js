var store = {};

export default {

    get: (key) => store[key],
    
    set: (key, value) => store[key] = value
};