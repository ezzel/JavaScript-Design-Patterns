//use the EcmaScript2015 features creating classes then constructor funtion you can transpile this code to Ecma5 using Babel transpiler
//Don't need to use the prototype keyword
'use strict'

class Task { 
    constructor(name) {
        this.name= name;
        this.completed= false;
    }
    complete() {
    console.log('completing task '+ this.name);
    this.completed = true;
    }
    save() {
    console.log('saving Task: ' + this.name);
    }
}

var task1 = new Task('create a demo for a constructor');
var task2 = new Task('create a demo for a modules');
var task3 = new Task('create a demo for a singletons');
var task4 = new Task('create a demo for a prototype');

task1.complete();
task2.save();
task3.save();
task4.save();