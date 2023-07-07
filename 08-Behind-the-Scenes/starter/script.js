'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // New variable, same name
            const firstName = "Steven";
            // Reassigning variable
            const output = "Echoooooo";

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }
        }
        console.log(millenial);
        // console.log add(2,3);
    }
    printAge();
    return age;
}


const firstName = 'Jonas';
calcAge(1991);