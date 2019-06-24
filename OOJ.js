// create a function that concole logs any argument given
function display(content){
    console.log(content);
}


// create a function that takes a name(string) as a parameter
// and returns "hi my name is" parameter given

function name (name){
    return "Hi, my name is " + name + ".";
}


// create 3 functions that describe the powers of a ninja
// you would like to create

function firePower (ability){
    return "Ninja can use " + ability+ ".";
}

function waterPower (ability){
    return "Ninja can use " + ability + ".";
}

function earthPower (ability){
    return "Ninja can use " + ability + ".";
}


// display(name("itachi"));
// display(firePower("fire spray"))
// display(waterPower("splash"))
// display(earthPower("earth wall"))

// Objectorientated programming 
// - Incapsulation
//

// OOP Incapsulation: grouping all behavior inside an object.
const ninja = {
    firePower (ability){
        return "Ninja can use " + ability+ ".";
    },
    
    waterPower (ability){
        return "Ninja can use " + ability + ".";
    },
    
    earthPower (ability){
        return "Ninja can use " + ability + ".";
    }, 

    name (name){
        return "Hi, my name is " + name + ".";
    }, 
}


// display(ninja.name("itachi"));
// display(ninja.firePower("fire spray"))
// display(ninja.waterPower("splash"))
// display(ninja.earthPower("earth wall"))


// create a class for instantiating ninjas
// OOP Absraction: hiding complecity
class GodNinja {
    constructor(name, ability, style, move){
        this.nameInsideGodNinja = name;
        this.ability1            = ability;
        this.style1              = style;
        this.move1               = move;
    }
    name(){
        return "Hi, My name is " + this.nameInsideGodNinja + ".";
    }

    ability(){
        return "Using " + this.ability1 + ".";
    }

    style(){
        return "Using " + this.style1 + " style.";
    }
    move(){
        return "using " + this.move1 + " move.";
    }
}


// OOP Inheritance objects inheriting properties and methods from the classes
// they were instantiated from
let itachi = new GodNinja("itachi", "Magenko", "Fire", "Upside Down Knife Throw");

display(itachi.name());
display(itachi.ability());
display(itachi.style());
display(itachi.move());



