var Repo = require('./taskRepository')
//Typical constructor pattern in JavaScript Ecma5 the variable Task is the constructor function 
var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}
//Link the objects prototype property to the function so when you create an object it doesn't copy the function just links to its prototype (static) 
Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
}

//export the the Task object 
module.exports = Task;