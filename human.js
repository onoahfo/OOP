function display(content){
    console.log(content)
}

// define functions
function name(name){
    return "Hi, my name is " + name + ".";
}

function age(age){
    return "My age is " + age + ".";
}

function gender(gender){
    return "My gender is " + gender + ".";
}

function hobby(hobby){
    return "My hobby is " + hobby + ".";
}

function talent(talent){
    return "My talent is " + talent + ".";
}

function height(height){
    return "My height is " + height + ".";
}

function weight(weight){
    return "My weight is " + this.height + ".";
}
//define parent
class Parent {
    constructor(name, age, gender, hobby, talent, height, weight){
        this.name   = name;
        this.age    = age;
        this.gender = gender;
        this.hobby  = hobby;
        this.talent = talent;
        this.height = height;
        this.weight = weight;
    }
    name(){
        return "Hi, my name is " + this.name + ".";
    }

    age(){
        return "My age is " + this.age + ".";
    }
    
    gender(){
        return "My gender is " + this.gender + ".";
    }

    hobby(){
        return "My hobby is " + this.hobby + ".";
    }

    talent(){
        return "My talent is " + this.talent + ".";
    }

    height(){
        return "My height is " + this.height + ".";
    }

    weight(){
        return "My weight is " + this.height + ".";
    }
}

// child class
// instantiate yourself from the child class
class Noah extends Parent {
    constructor(name, age, gender, hobby, talent, height, weight){
        super(name, age, gender, hobby, talent, height, weight)
    }
    combo(){
        return 
        "Hi my name is " + super.name() + " I am " + super.age() + " I am a " + super.gender() + ", my Hobby is " + super.hobby() + ", my talent is " + super.talent() + ", my height is " + super.height() + "."
        
    }
}

displ



















