//Prototype  and Inheritance

const activeMethods = {
    eat(meal) {
      console.log(`${this.name} is eating ${meal}.`)
    },
    play(sport) {
      console.log(`${this.name} is playing ${sport}.`)
    },
  }
  
  function Person (name, activity) {
    let person = Object.create(activeMethods)
    person.name = name;
    person.activity = activity;
  
    return person;
  }
  
  const manish = Person('Manish')
  const kumar = Person('Kumar')
  
  console.log(manish.eat("Briyani"));
  console.log(kumar.play("Cricket"));