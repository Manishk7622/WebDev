// find and some

let Grades = [
    {
    name: 'Manish',
    grade: O
}, 
{
    name: 'Kumar',
    grade: B
}, 
{
    name: 'Raj',
    grade: A
}]; 

console.log(Grades.find(x => x.grade = O)); //Out=>{name: 'Manish',grade: O }, 
console.log(Grades.some(x => x.grade = O)); // Out => true,
