/*
    So we will see two different ways to create an object instance — 
    declaring an object literal, and 
    using a constructor function.
*/

//Using an Object Literal
// let person = {
//     first_name : 'Andy',
//     last_name : 'Smith',

//     getFunction: function() {
//         return (`The name of the person is ${person.first_name} ${person.last_name}`
//         )
//     },
//     //object within object 
//     phone_number : { 
//         mobile:'12345', 
//         landline:'02026789'
//     } 
// }
// console.log(person.getFunction());
// console.log('Landline number: ' + person.phone_number.landline);



//define a person with a normal function
// function createNewPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//         alert('Hi! I\'m' + obj.name + '.');
//     };
//     return obj;
// }

// const salva = createNewPerson('salva');
// salva.name;
// salva.greeting();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

////in the form of constructor functions 
// function Person(name) {
//     this.name = name;
//     this.greeting = function() {
//         alert('Hi! I\'m' + this.name + '.');
//     }
// }

// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        //alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        // return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
        
        // First define a string, and make it equal to the part of the bio that we know will always be the same.        
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old ';
        
        // define a variable that will contain the pronoun part of the second sentence        
        var pronoun;

        // check what the value of gender is, and set pronoun to an appropriate value in each case        
        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They Like ';
        }

        // add the pronoun string on to the end of the main string
        string += pronoun;

        // use another conditional to structure the last part of the second sentence depending on whether the number of interests is 1, 2, or 3
        if(this.interests.length === 1) {
            string += this.interests[0] + ' . ';
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            for(var i = 0; i < this.interests.length; i++) {
                if(i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }
        
        // alert(string);
        return string;
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}


let person1 = new Person('Bob', 'Smith', 32, 'Male', ['Music', 'Skiing']);
let person2 = new Person('Sarah', 'Smith', 32, 'Female', ['Music', 'Skiing', 'kickboxing']);

document.getElementById('demo').innerHTML = 'Name: ' + person1.name.first + ' ' + person1.name.last;
document.getElementById('demo1').innerHTML = 'Age: ' + person1.age;
document.getElementById('demo2').innerHTML = 'Gender: ' + person1.gender;
document.getElementById('demo3').innerHTML = 'Interests: ' + person1.interests;
document.getElementById('demo4').innerHTML = person1.bio();
document.getElementById('demo5').innerHTML = person2.bio();