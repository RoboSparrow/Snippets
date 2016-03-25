/**
 * @see: http://stackoverflow.com/a/2455378
 */
 
var QueryVars = {

	/**
	 * @param {string} name
	 * @param {string} url  - if not set == location.href
	 * @return {string|boolean} - extracted value or false
	 */
	get : function(name, url) {

		query = (url === 'undefined' || !url) ? window.location.search.substring(1) : url.match(/(\?.*)/)[1].substring(1);

		var vars = query.split('&');
		console.log(query, vars);
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] == name) {
				return decodeURIComponent(pair[1]);
			}
		}
		return false;
	},
    
	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {string} url  - if not set == location.href
	 * @return {string} url
	 */
	set : function(key, value, url) {

		url = (url === 'undefined' || !url) ? window.location.href : url;

		var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
		var separator = url.indexOf('?') !== -1 ? "&" : "?";
		if (url.match(re)) {
			return url.replace(re, '$1' + key + "=" + encodeURIComponent(value) + '$2');
		} else {
			return url + separator + key + "=" + encodeURIComponent(value);
		}
	}
};

//// Examples:
/*
var google = 'https://www.google.com.au/search?q=kitten+images&oq=kitten+images&aqs=chrome..69i57j0l2j69i60l3.3181j0j4&sourceid=chrome&es_sm=122&ie=UTF-8';
console.log(QueryVars.get('q', google));
console.log(QueryVars.set("query2", "test1"));
google = QueryVars.set("q", 'puppies', google);
google = QueryVars.set("oq", 'puppies', google);
console.log(google);
console.log(QueryVars.get("q", google));
console.log(QueryVars.get("oq", google));

//obviously you need to add `?query=myValue` in the browser bar to test this
console.log(QueryVars.get("query"));
console.log(QueryVars.set("query", 'newValue'));
*/
