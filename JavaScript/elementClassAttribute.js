/* jshint esversion: 3 */

var elementUtils = {
    toggleClass: function(element, name) {
        var classes = element.className.split(/\s+/);
        var length = classes.length;
        for(var i = 0; i < length; i++) {
            if (classes[i] === name) {
                classes.splice(i, 1);
                break;
            }
        }
        if (length === classes.length) {
            classes.push(name);
        }
        element.className = classes.join(' ').trim();
    },
    
    addClass:  function(element, name) {
        var classes = element.className.split(/\s+/);
        if(classes.indexOf(name) < 0){
            classes.push(name);
            element.className = classes.join(' ').trim();
        }
    },
    
    removeClass: function(element, name) {
        var classes = element.className.split(/\s+/); 
        if(classes.indexOf(name) >= 0){
            for(var i = 0; i < classes.length; i++) {
                if (classes[i] === name) {
                    classes.splice(i, 1);
                    break;
                }
            }
            element.className = classes.join(' ').trim();
        }
    },
    
    hasClass: function(element, name){
        name = " " + name + " ";
        if ((" " + element.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(name) > -1){
            return true;
        }
        return false;
    }

};

var elem1 = document.createElement('div');

var elem2 = document.createElement('div');
elem2.className = 'test';

var elem2 = document.createElement('div');
elem2.className = 'someClass test';

var elem3 = document.createElement('div');
elem3.className = 'someClass test someOtherClass';

var elem4 = document.createElement('div');
elem4.className = 'someClass someOtherClass';

var elem5 = document.createElement('div');
elem5.className = 'someClass test-class someOtherClass';

it("should be able to find class names in elements.", function() {
    var hasClass = elementUtils.hasClass(elem1, 'test');
    expect(hasClass).toBe(false);
    hasClass = elementUtils.hasClass(elem2, 'test');
    expect(hasClass).toBe(true);
    hasClass = elementUtils.hasClass(elem3, 'test');
    expect(hasClass).toBe(true);
    hasClass = elementUtils.hasClass(elem4, 'test');
    expect(hasClass).toBe(false);
    hasClass = elementUtils.hasClass(elem5, 'test');
    expect(hasClass).toBe(false);
});

it("should be able to add class names to elements.", function() {
    elementUtils.addClass(elem1, 'new-class');
    expect(elem1.className).toBe('new-class');
    var before = elem2.className;
    elementUtils.addClass(elem2, 'new-class');
    expect(elem2.className).toBe((before + ' new-class'));
});

it("should not add class names to elements where the class name alredy exists.", function() {
    var add = elem2.className; 
    elementUtils.addClass(elem2, 'test');
    expect(elem2.className).toBe(before);
    add = elem3.className; 
    elementUtils.addClass(elem3, 'test');
    expect(elem3.className).toBe(before);
    add = elem5.className; 
    elementUtils.addClass(elem5, 'test-class');
    expect(elem5.className).toBe(before);
});

it("should be able to remove class names from elements.", function() {
    elementUtils.removeClass(elem1, 'new-class');
    expect(elem1.className).toBe('');
    elementUtils.removeClass(elem2, 'new-class');
    expect(elem2.className).toBe('someClass test');
});

it("toggle class names.", function() {
    elementUtils.toggleClass(elem1, 'toggle');
    expect(elem1.className).toBe('toggle');
    elementUtils.toggleClass(elem1, 'toggle');
    expect(elem1.className).toBe('');
    elementUtils.toggleClass(elem5, 'test-class');
    expect(elem5.className).toBe('someClass someOtherClass');
});
