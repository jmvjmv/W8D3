function Cat(name, owner){
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
    return `${this.owner} does not love ${this.name}.`;
}

const cat = new Cat("Garfield", "John");

console.log(cat.cuteStatement());

Cat.prototype.cuteStatement = function () {
        return `Everyone does not love ${this.name}.`;
}

console.log(cat.cuteStatement());

Cat.prototype.meow = function () {
    return "meow.";
}

console.log(cat.meow());

cat.meow = function() {
    return "different meow.";
}

console.log(cat.meow());