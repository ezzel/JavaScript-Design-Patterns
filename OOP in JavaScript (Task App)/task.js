var task = {
    title : 'My title',
    description : 'My description',
};

Object.defineProperty(task,'toString', {
    value: function() {
    return this.title + ' ' + this.description;
},
writable: true,
enumerable: true,
configurable: true
})



var urgentTask = Object.create(task);

Object.defineProperty(urgentTask,'toString', {
    value: function() {
    return this.title + ' this is an urgent task!' 
},
writable: true,
enumerable: true,
configurable: true
})


console.log(Object.keys(task));
console.log(urgentTask.toString());

