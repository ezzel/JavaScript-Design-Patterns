//import the task object 
var Task = require('./task')
var Repo = require('./taskRepository')

var task1 = new Task(Repo.get(1));

//Like a typical instantiation of an object
var task2 = new Task({name: 'create a demo for a modules'});
var task3 = new Task({name: 'create a demo for a singletons'});
var task4 = new Task({name: 'create a demo for a prototype'});

task1.complete();
task2.save();
task3.save();
task4.save();