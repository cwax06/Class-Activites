function Programmer(name, position, age, favLang) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favLang = favLang;
    this.printInfo = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nAge: " + this.age + "\nLanguages: " + this.favLang);
    };
}

var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

bob.printInfo();

var newProgrammer = ("bob")
Programmer.prototype.hello = function () {
    console.log("printing from bob");
}

bob.hello();