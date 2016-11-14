// https://github.com/umdjs/umd

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['dependency1', 'dependency2'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('dependency1'), require('dependency1'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.dependency1, root.dependency2);
    }

}(this, function (dependency1, dependency2) {

    // methods
    function private(){
    };

    function one(){
    };

    function two(){
    };

    // expose
    return {
        one: one,
        teo: two
    }

}));
