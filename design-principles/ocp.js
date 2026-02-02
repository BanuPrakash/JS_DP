let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    huge: 'huge'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}


let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

// need to write general interface for specification
class ColorSpecification {
    constructor(color) {
        this.color = color;
    }
    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }
    isSatisfied(item) {
        return item.size === this.size;
    }
}


class AndSpecification {
    constructor(...specs) {
        this.specs = specs
    }
    isSatisfied(item) {
        return this.specs.every(spec => spec.isSatisfied(item));
    }
}

// OCP, closed for change, open for extension
class BetterFilter {
    filter(items, spec) {
        return items.filter(item => spec.isSatisfied(item));
    }
}



let pf = new BetterFilter();
console.log(`Green products (old):`);
for (let p of pf.filter(products, new ColorSpecification(Color.green)))
  console.log(` * ${p.name} is green`);

let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);

for (let p of pf.filter(products, spec))
  console.log(` * ${p.name} is large and green`);
