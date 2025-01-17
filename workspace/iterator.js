
let values = [100, 200, 300];

for(let v of values) {
    console.log(v);
}

class Stuff {
    constructor() {
        this.a = 10;
        this.b = 20;
    }
    [Symbol.iterator]() {
        let i = 0;
        let self = this;
        return {
            next: function() {
                return {
                    done: i > 1,
                    value: self[i++ === 0 ? 'a' : 'b']
                }
            }
        }
    }
}

let stuff = new Stuff();
for(let item of stuff) {
    console.log(item);
}

let str = "Hello";
let iterator = str[Symbol.iterator]();
while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value)
}