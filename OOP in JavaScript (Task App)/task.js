//You can create an object in three ways

//1- var task = {};
//2- var task = new {};
//3- var task = Object.create(Object.prototype);

//You can define properties to and object like this
var task = {
    title : 'My title',
    description : 'My description',
};

//You can dynamicaly add a property to an object like this
task.age = '2';

//Or like this using the defineProperty method/function that contains 3 parameters the object, the property name, and its configuration
Object.defineProperty(task,'toString', {
    value: function() {
    return this.title + ' ' + this.description;
},
// can be writable or not after initializing it
writable: true,
//can enumerate the property (e.g. using a for loop, Object.keys(task))
enumerable: true,
//can the property be configurable changing the propery attributes (e.g. changing writable, enumerable)
configurable: true
})

//Creating an urgent task and inherting from task 
var urgentTask = Object.create(task);
//adding a toString property to urgentTask object 
Object.defineProperty(urgentTask,'toString', {
    value: function() {
    return this.title + ' this is an urgent task!' 
},
writable: true,
enumerable: true,
configurable: true
})


console.log(Object.keys(task));
console.log(Object.keys(urgentTask));
console.log(task.toString());
console.log(urgentTask.title);
console.log(urgentTask.toString());

