/**
 * Check if an object is empty
 * @param object obj Object to validate
 * @return boolean
 */
var isEmptyObject = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

/**
 * Check if an object is truthy (is object and and has properties)
 * @param object obj Object to validate
 * @return boolean
 */
 var objectTruthy = function(obj) {
    // typeof
    if(typeof obj !== 'object'){
        return false;
    }
    // null
    if(obj === null){
        return false;
    }
    // array
    if(obj.hasOwnProperty('length')){
        return true;
    }
    for(var key in obj) {
        return true;
    }
    // object > property
    return false;
};
