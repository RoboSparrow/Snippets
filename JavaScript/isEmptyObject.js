/**
 * Check if an object is empty
 * @param object obj Object to validate
 * @return boolean
 */
var isEmptyObject = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
    //// ECMA 5
    // return(Object.keys(obj).length === 0)  true : false;
};

/**
 * Check if an object is truthy (is object and and has properties)
 * @param object obj Object to validate
 * @param object includeArrays Flags whether arrays should be treated as objects or not (default: no)
 * @return boolean
 */
 var objectTruthy = function(obj, includeArrays) {
    
    includeArrays = includeArrays || false;
    
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
        return (includeArrays) ? true : false;
    }
    return true;
    
};
