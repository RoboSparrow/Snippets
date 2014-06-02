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