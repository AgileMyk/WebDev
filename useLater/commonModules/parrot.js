//parrot.cjs

module.exports = {
    name: 'Timbers',
    color: 'purple and yellow',
    age: 3
}

console.log(module.parent); //returns parent module that uses the current module
console.log(module.children); //returns current module's child modules (none in this case);
console.log(module.filename); //returns current module filename
console.log(module.path); //returns current file's path without the file name

//modules have shortcut methods
//this will return an object with the key-value pair { shortCutObject: 'ThisIsShorter'}
module.exports.shortCutObject = 'ThisIsShorter'