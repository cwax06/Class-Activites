function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;


    this.print = function () {

    }

    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!")
            this.hungry = false;
            this.sleepy = true;
        } else if (this.hungry === false) {
            console.log("No thanks! I'm full.")
        }
    };

    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else if (this.sleepy === false) {
            console.log("No way! I'm not tired.")
        }
    };

    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's Play!");
            this.bored = false;
            this.hungry = true;
        } else if (this.bored === false) {
            "Not right now. Later?"
        }
    };

    this.increaseAge = function () {
        this.age += 1;
        console.log("Happy Birthday to me! I am" + age + " Tama years old!")
    };
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function () {
    console.log("Woof, Woof!")
};

dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else if (this.outside === true) {
        console.log("We're already outside though!");
    }
};

dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else if (this.outside === false) {
        console.log("I'm already inside...")
    }
};

var cat = new DigitalPal();
cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!")
};

cat.destroyFurniture = function () {
    this.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    bored = false;
    sleepy = true;
    if (this.houseCondition === 0) {
        this.buyNewFurniture();
    }
};

cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about this?");
};

dog.feed();
dog.play();
dog.sleep();
dog.play();