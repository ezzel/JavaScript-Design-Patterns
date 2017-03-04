//import the task object 
var Task = require('./Task')
//Like a typical instantiation of an object
var task1 = new Task('create a demo for a constructor');
var task2 = new Task('create a demo for a modules');
var task3 = new Task('create a demo for a singletons');
var task4 = new Task('create a demo for a prototype');

task1.complete();
task2.save();
task3.save();
task4.save();