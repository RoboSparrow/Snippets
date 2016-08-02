/**
 *
 * Checks document.readystate using setInterval. This works independend from event listeners or location inside the html.
 * The advantage is that this can be initialised anytime and anywhere in the document life cycle, even if the event was already fired.
 *
 * Extracted this from some malware injected into one of our websites.
 *
 */

(function() {
    function ready() {
    }
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            clearInterval(readyStateCheckInterval);
            ready();
        }
    }, 10);
}());
