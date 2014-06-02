/**
 * Adds a timestamp to a given uri, 
 * only valid cross browser solution for bypassing browser cache for XMLHttpRequest
 * @param string uri
 * @return string
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Cross-site_XMLHttpRequest
 */

var uniqueURI = function(uri){
    return uri + ((/\?/).test(uri) ? "&" : "?") + (new Date()).getTime();
};
console.log(uniqueURI('https://www.google.com/search?q=test'));
console.log(uniqueURI('https://www.google.com'));