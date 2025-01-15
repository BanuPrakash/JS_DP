let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    yuge: 'yuge'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
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


class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}


class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }
    isSatisfied(item) {
        return  this.specs.every(spec => spec.isSatisfied(item));
    }
}

// OCP; Program to Contract
class ProductFilter {
    filter(items, spec) {
      return items.filter(item => spec.isSatisfied(item));
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products:`);
for (let p of pf.filter(products, new ColorSpecification(Color.green)))
  console.log(` * ${p.name} is green`);

console.log(`Small products:`);
for (let p of pf.filter(products, new SizeSpecification(Size.small)))
  console.log(` * ${p.name} is small`);

let andSpec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);

console.log("****")
for (let p of pf.filter(products, andSpec))
    console.log(` * ${p.name} is large and green`);
  