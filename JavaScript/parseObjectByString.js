/**
 * very cool script by Alnitak, parses nested properties from string
 * @see: Object.byString(someObj, 'part3[0].name');  
 */ 
   function parseObjectByString(o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        var a = s.split('.');
        while (a.length) {
            var n = a.shift();
            if (n in o) {
                o = o[n];
            } else {
                return undefined;
            }
        }
        return o;
    }
// var val = parseObjectByString(someObj, 'part3[0].name');
