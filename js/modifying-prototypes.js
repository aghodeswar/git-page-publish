/*
    So we will see two different ways to create an object instance — 
    declaring an object literal, and 
    using a constructor function.
*/


/*
    The Object() constructor
    we can use the Object() constructor to create a new object
*/ 

function Person(first, last, age, gender, interests) {
    this.name = {
        'first' : first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old ';
        var pronoun;


        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They Like ';
        }

        string += pronoun;

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

// let person3 = Object.create(person1);


/*
    Modifying prototypes
    modifying the prototype property of a constructor function — methods added to the prototype 
    are then available on all object instances created from the constructor
*/
Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
};



// document.getElementById('demo').innerHTML = 'Name: ' + person1.name.first + ' ' + person1.name.last;
// document.getElementById('demo1').innerHTML = 'Age: ' + person1.age;
// document.getElementById('demo2').innerHTML = 'Gender: ' + person1.gender;
// document.getElementById('demo3').innerHTML = 'Interests: ' + person1.interests;
// document.getElementById('demo4').innerHTML = person1.bio();
// document.getElementById('demo5').innerHTML = person2.bio();