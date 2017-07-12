
// 1) /////////////////////////////////////////////
/**
 * Very cool script by Alnitak, parses nested properties from string
 * @see: Object.byString(someObj, 'part3[0].name');  
 * @see https://stackoverflow.com/a/6491621
 */ 
 
function parseObjectByString(o, s) {
    if(typeof o !== 'object' || !o){// null is an object
        return o;
    }
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

var val = undefined;
try {
    var val = parseObjectByString(someObj, 'part3[0].name');
} catch (e) {
 /*nothing*/
}

// 2) /////////////////////////////////////////////

/**
 * dot notation (no array)
 * @see https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
 */
 
'use strict';

const assert = require('assert');

const  obj = {
    a: {
        b: '1',
        c: '2' ,
        d: {
            etc: 'etc1'
        },
        etc:'etc2'
    },
    b: '3',
    etc:'etc3'
};

let res;

res = 'a.b.c'.split('.').reduce((o,i) => { return o[i] }, obj);
assert.strictEqual(res, undefined);

res = 'etc'.split('.').reduce((o,i) => { return o[i] }, obj);
assert.strictEqual(res, 'etc3');

res = 'a.c'.split('.').reduce((o,i) => { return o[i] }, obj);
assert.strictEqual(res, '2');

res = 'a.d.etc'.split('.').reduce((o,i) => { return o[i] }, obj);
assert.strictEqual(res, 'etc1');
