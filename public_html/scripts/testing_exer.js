/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor
 */

$(document).ready(function () {
    // diff between == and ===
    var a = {a: 1};
    var b = {a: 1};
    a == b //false
    a === b //false


    var c = a;
    a == c//true
    a === c //true
    // Check equality
    /*
     isEqual(a,c);
     function isEqual(a, b) {
     var aProps = Object.getOwnPropertyNames(a),
     bProps = Object.getOwnPropertyNames(b);
     
     if (aProps.length != bProps.length) {
     return false;
     }
     
     for (var i = 0; i < aProps.length; i++) {
     var propName = aProps[i];
     
     if (a[propName] !== b[propName]) {
     return false;
     }
     }
     return true;
     }
     */
    //Extend the core object
    $('#result_div').append("Extending core object example </br>")
    $('#result_div').append("===================================================</br>");
    Date.prototype.nextday = function () {
        var currentdate = this.getDate();
        return new Date(this.setDate(currentdate + 1));
    };
    var date = new Date();
    var current = date;
    var next_day = date.nextday();
    $('#result_div').append(current + next_day + "</br>");
    $('#result_div').append("===================================================</br>");
    $('#result_div').append("Extending core object example reverser string </br>");

    String.prototype.reverse = function () {
        return this.split('').reverse().join('');

    }
    var strng = "hellp world";
    var revers_str = strng.reverse();
    $('#result_div').append("Original string : " + strng + " </br>");
    $('#result_div').append("reverse string : " + revers_str + " </br>");
    $('#result_div').append("===================================================</br>");
    $('#result_div').append("Extending core object example append array </br>");
    Array.prototype.apend = function () {
        return this.concat(this);
    }
    var ary = [1, 2, 3, 4, 5];
    var apend_ary = ary.apend();
    $('#result_div').append(" appended array: " + apend_ary + " </br>");
    $('#result_div').append("===================================================</br>");
    function isTwoPassed() {
        var args = Array.prototype.slice.call(arguments);
        return args.indexOf(2) != -1;
    }
    $('#result_div').append(" check arguments passed or not (1,4)? </br>");
    var check1 = isTwoPassed(1, 4); //false
    $('#result_div').append("ispassed ?" + check1 + "</br>");
    $('#result_div').append(" check arguments passed or not (5, 3, 1, 2)? </br>");
    var check2 = isTwoPassed(5, 3, 1, 2);
    $('#result_div').append("ispassed ?" + check2 + "</br>");

    var pets = new Array( );
    pets[0] = new Array("Sheba", 13, "cat");
    pets[1] = new Array("Jasper", 12, "dog");
    var dinosaurs = new Array( );
    dinosaurs[0] = new Array("Cyril", 45, "Tyrannosaur");
    dinosaurs[1] = new Array("Gertrude", 72, "Brontosaur");
    var animals = new Array(pets, dinosaurs);
    alert(animals[0][1][0] + " is a " + animals[0][1][1] + " year old " + animals[0][1][2]); // Displays "Jasper is a 12 year old dog"

    var myObject = {
        price: 20.99,
        get_price: function () {
            return this.price;
        }
    };
    var customObject = Object.create(myObject);
    customObject.price = 19.99;

    delete customObject.price;
    console.log(customObject.get_price());



    function foo(val) {
        alert(val);
    }

    var funMaker = function (k) {
        return function () {
            foo(k);
        };
    };

    for (var i = 0; i < 3; i++) {
        $('#button' + i).click(funMaker(i));
    }
    var Foo = function (a) {
        function bar() {
            return a;
        }
        this.baz = function () {
            return a;
        };
        
    };

    Foo.prototype = {
        biz: function () {
            return a;
        }
    };
    Foo.prototype = {
        baz: function () {
            return a;
        }
    };

    var f = new Foo(8);
//f.bar();
    var tf = f.baz();
    var tt = f.biz();

});
