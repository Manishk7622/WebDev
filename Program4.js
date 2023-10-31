// Bind ,call, Apply

var person = {
    firstname: 'Manish',
    lastname: 'kumar ',
    getfullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var greetName = function(age) {
    console.log("Hi "+this.getfullName() + ' .What is your age?');
    console.log( "I am "+ age + " years old");
};

var logName = greetName.bind(person);

logName(23); 
//Output: Hi Manish kumar .What is your age?
// I am 23 years old

greetName.call(person,23); 
greetName.apply(person,[23]); 


