
'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let numone = Number(event.numone);
    let numtwo = Number(event.numtwo);
    
    function add() {
        return numone + numtwo;
    }
    
    function multi() {
        return numone * numtwo;
    }
    
    function subt() {
         if (numone >= numtwo) {
             return numone - numtwo;
         } else {
             return numtwo - numone;
         }
    }
    
    function divi() {
        return numone / numtwo;
    }
    
    function result() {
        let origin = "Display the result of four arithmetric operations. Original numbers are "  + numone + ", "+ numtwo + ". ";
        let addition = "Addtion: " + add() + ", ";
        let multipli = "Multiplication: " + multi() + ", ";
        let subtra = "Subtraction: " + subt() + ", ";
        let division = "Division: " +  divi()  + ". ";
        let answer = origin.concat(addition, multipli, subtra, division);
        return answer;
    }
    
    callback(null, result()); 
};

