function display(content){
    console.log(content)
}

// define functions
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
class Me extends Parent {
    constructor(name, age, gender, hobby, talent, height, weight){
        super(name, age, gender, hobby, talent, height, weight)
    }
    combo(){
        return 
        "Hi my name is "+name+" I am "+age+" I am a "+gender+", my Hobby is "+hobby+", my talent is "+talent+", my height is "+height+
        
    }
}

displ



















