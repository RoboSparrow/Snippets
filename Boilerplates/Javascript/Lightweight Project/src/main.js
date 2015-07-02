(function(){
    'use strict';


var keys = document.querySelectorAll('.key');

var onMouseDown = function(node){

    node.onmousedown = function(e){
        
        e.preventDefault();

    };
console.log(9);//test
};

for(var i = 0; i < keys.length; i++){

   onMouseDown( keys[i]);
}
})();
 
