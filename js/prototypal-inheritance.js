function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
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


};
Person.prototype.greeting = function() {
    alert('Hi I\'m' + this.name.first + '.')
}

Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false,
    writable: true
});

function Student(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}


Teacher.prototype.greeting = function() {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.'
    }
    alert('Hello my name is ' + prefix + '' + this.name.last + ', and I teach ' + this.subject + '.');
}

Student.prototype.greeting = function() {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.'
    }
    alert('Yo.! my name is ' + prefix + '' + this.name.last + ', and I like ' + this.subject + '.');
}

//creating an object instance
let teacher1 = new Teacher('Dave', 'Griffith', 31, 'male', ['football', 'cookery'], 'mathematics' );
let student1 = new Student('Andy', 'Griffith', 16, 'male', ['bascketball', 'cookery'], 'history');

//+++++++++++++++++++++++++++++++++++++++++++

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myFunction(this);
//     }
// };
// xhttp.open("GET", "js/record-xml.xml", true);
// xhttp.send();

// function myFunction(xml) {
//     var xmlDoc = xml.responseXML;
//     document.getElementById("demo").innerHTML =
//     xmlDoc.getElementsByTagName("first")[0].childNodes[0].nodeValue + "<br>" +
//     xmlDoc.getElementsByTagName("last")[0].childNodes[0].nodeValue + "<br>" +
//     xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue;
// }