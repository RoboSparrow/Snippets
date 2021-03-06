/* jshint esversion: 3 */

/**
 * Simple Json Cookie object.
 * Sets, retrieves and deletes cookies
 * @see Based on this great post: http://stackoverflow.com/a/11344672
 */
 
var Cookie = {

    set : function(name, value, expiryDate) {
        //accepts javascript date objects or already parsed tdate sttrings (not validated!)
        var expires = '';
        if ( typeof expiryDate === 'object' && expiryDate instanceof Date) {
            expires = expiryDate.toGMTString();
        }
        if (expires) {
            expires = ';expires=' + expires;
        }
        var cookie = [name, '=', JSON.stringify(value), expires, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
        document.cookie = cookie;
    },

    get : function(name) {
        var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
        result = (result) ? JSON.parse(result[1]) : null;
        return result;
    },

    del : function() {
        var cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
        document.cookie = cookie;
    }
};

//// Example:
// Set expiry date for one year
// var ex = new Date();
// ex.setFullYear(new Date().getFullYear() + 1);
// Cookie.set('test', {test:1}, ex);
// console.log(Cookie.get('test'));

//// PHP
// Set cookie with RAW urlencoding in PHP so it can be read via JavaScript
// @see http://stackoverflow.com/a/2678602
// $cookie = setrawcookie($name, rawurlencode(json_encode($data)), $expiresAt);
