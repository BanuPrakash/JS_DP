class Bird {
    fly() {
        //..
    }
}

class Eagle extends Bird {
    dive() {
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

// LSP fails
class Penguin extends Bird {
    //Problem: Can't fly! 
}

// Solution: declare interface Flyable { fly();}
// class Bird {}
// class Eagle extends Bird implements Flyable { }