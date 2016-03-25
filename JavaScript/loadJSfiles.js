
/**
 * Dynamically load test js into head. 
 * Use same slot for loading, so only one script can be loaded at one time.
 */
 
var loadTests = function(file, id) {
    var script = document.createElement('script');
    var target = document.getElementById(id);
    
    //replace
    if(target){
        document.head.removeChild(target);
    }
    
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", file);
    script.setAttribute("id", id);
    
    document.head.appendChild(script);
};
