//Module pattern list of function and returing those functions like a property in C#
//Using in making services such as database services reading and writing JSON files to and from the database
var repo = function() {

var get = function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            }
        }
var save = function(task) {
    console.log('Saving ' + task.name + ' to the database' ) 
        }
        
        return {
        get: get, 
        save: save
    }
}
//Exports the whole function repo
module.exports = repo();