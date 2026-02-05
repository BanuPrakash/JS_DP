# Front-End Design Patterns (React)
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Email: banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/JS_DP

Softwares Required: 
Visual Studio Code, Chrome Web Browser and NodeJS Latest LTS
```

SOLID Design Principles: 
    five design princiciples - guidelines - easier maintain, understand, extend - More modular code.
    Cyclomatic complexity
Design Patterns: [GoF]
    like special recipes that help to solve common problems in programming language
    like instructions set provided by LEGO

    Creational Pattern: Builder, factory, abstract factory, singleton, prototype
    Structural Pattern: Adapter, Bridge, decorator, composite, proxy, flyweight
    Behavioural pattern: Chain, Command, vistor, strategy, observer, memento, ...

React specific: Compound, Composition, ...

S --> Single Responsibility Principle (SRP)
A function should have one reason to change.

Why it matters:
1. Easier to understand
2. Safer to modify
3. Better reusability
4. Simpler Testing

npm create vite@latest
React, TypeScript

========

O -> Open Close Principles, Closed for Change, open for Extension

L -> Liskov Substitution Principle
    Objects should be replaced with instances of thier subclasses without altering the behaviour.

    Generalization and Specicialization relationship
    At any point of time Generalization should be replaceble with Specialization

```
    class Account {
        login() {}
        credit() {}// BAD, Loan Account we can't credit,.
    }

    class SavingsAccount extends Account {
        credit() {}
        debit() {}
        // login() {}
    }

    class CurrentAccount extends Account {
        //...
        // login() {}
    }


    let account = new SavingsAccount();
    account.login(); // should work


     account = new Account();
    account.login();

    Example:
    class Bird {
        fly();
    }

    class Eagle extends Bird {
        eat() {}
        fly();
    }

    class Penguin extends Bird {
        eat() {

        }

        // fails
        fly() {}
    }

    // Solution: come up with a seperate interface
    interface Flyable {
        fly();
    }

    class Eagle extends Bird implements Flyable {
        fly();
    }
     class Penguin extends Bird {
        eat() {

    }

    OR:
    class FlyableBird extens Bird {
        fly() {}
    }
     class Eagle extends FlyableBird {
        fly();
     }


```

I -> Interface Seggregation

```
     interface CustomerService {
        credit(amt);
        debit(amt);
        checkBalance();
    }

    interface AdminService extends CustomerService{
        createAccount(account);
        deleteAccount(accID);
    }

   

    class BankingService implements AdminService, CustomerService {
          createAccount(account) {}
        deleteAccount(accID) {}
         credit(amt) {}
        debit(amt) {}
        checkBalance() {}
    }
    
    let bankingService = new BankingService();
    // return interface based on role.
    customerService.debit();
    customerService.createAccount(account); // fails
```

react-principles: npm install
react-principles: npm run dev

Dependency Injection:
Flow is Inversed.
Controller -> Service -> Repository -> database

Inversion Of Flow:
Controller <- Service <- Repository <- database


props -> Dependency Injection --> Top to Bottom

Java: Spring Container / Play / Jersy / EJ container --> DI Providers
JavaScript / TypeScript: InversifyJS/ TypedInject / TypeDI / TSyringe

TSyringe: Lightweigt dependency injection container
Allows to declare dependency inecjection using decorators
Swap implementation easily
Keep business logix independent of React

Perfect for services, APIs,.. repositories

1) npm create vite@latest
```
npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  react-di
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript

```

react-di % npm i tsyringe reflect-metadata

in main.tsx
import 'reflect-metadata'

tsconfig.app.json
 "experimentalDecorators": true,
 "emitDecoratorMetadata": true

new XmlBeanApplicationContext("file.xml")
new AnnotationConfigApplicationContext(...);

When should I use DI libraires in React?
* Great for large apps
* clean Architecture
* Business logic is outside of UI
* Easy Testing
* Avoid Props-drill
* Many a times better than React Context [ Provider, Consumer] and also leads to lots of re-rendering
* Business logic can be used along with legacy JavaScript, other libraries / framework

======================

Creational Pattern:
* Deals with creation of objects
* Wholesale vs piecewise (step-by-step)

Builder Pattern: Object creation is complicated, piecewise object construction provided by an API.

// Lombok
The Lombok @Builder annotation automatically generates the boilerplate code required to implement the builder design pattern for a Java class, constructor, or method.

Person.lives(..).works(...).build();

Pros:
* step-by-step construct
* defer construction steps

==================

```
    function App() {
        const elements = new Builder()
            .input({label:'Name'})
            .input({label:'Email'})
            .input({label:'Password', type="password"})
            .checkbox({label:'Subscribe to NewsLetter'})
            .build();
        
        return (
            <div>
            {elements}
            </div>  
        )
    }

```

Day 2:

Recap: SOLID Design Principles 
Design Patterns [GoF]
Creational Pattern: Builder Pattern
Structural Pattern
Behavioural Pattern

Factory Pattern:
Intent: Create objects without exposing the creation logic, refer to them via a common interface

```
    instead of:
    let repo = new SQLRepository(); // hard-coded
    use:
    let repo = RepositoryFactory.getRepository(); // factory method

    getRepository();  can create a RDBMS repository , NoSQL repository, File Based repo,.. 
```
* you ask for something
* factory decides what to create
* You don't care how it's created

Example:
```
    // Not OCP
    function apiClientFactory(env) {
        if( env === "dev") {
            return {
                baseUrl: "http://localhost:3000",
                log: true
            }
        }

        if( env === "prod") {
              return {
                baseUrl: "https://api.example.com",
                log: false
            }
        }
    }

    const api = apiClientFactory(process.env.NODE_ENV);
```

.env
API_ENDPOINT = http://localhost:3000
LOG: true

```
    function getPlants(season) {
        if(season === 'SUMMER') {
            ...
        } else if (season === 'WINTER') {

        }
    }

Factory                             Builder
Create in one step                  step-by-step
chooses which object                configures how
good for variants                   good for complex configs like .setX(5).setY(89).build()

React.createElement()
document.createElement() ---> Factory method


const ButtonFactory = {
    primary: props => <PrimaryButton {...props} />,
    danger: props => <DangerButton {...props} />
}

const Button = ({type, ..props}) => {
    const Component = ButtonFactory[type];
    return Component ? component(props): null
}

<Button type="primary" />
```

Abstract Factory pattern.
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

Theme: LightTheme and DarkTheme

=====

React Pattern: Compound Pattern

```
Think of compund pattern like <select> and <option> elements in HTML.
Apart - don't do much, together complete expereince

select an option share state and handle logic

Compound Pattern are a pattern in which components are used together such that they share state and lets communicate with other
``

PostCard.tsx before Compound Pattern:
* Sometimes we need to customize like:
1) maybe not show. all buttons
2) maybe not show Author
3) maybe order can be changed

=========================

Prototype Pattern: Clone

Pattern is about sharing methods and properties between objects via a prototype, instead of copying them into each object.
In JavaScript, it's built-in.

Example 1:
```
    const userPrototype = {
        login() {
            console.log(`${this.name} logged in`);
        }
    }
    // Object.create() is a static method in JavaScript that creates a new object, 
    // using an existing object as the prototype of the newly created object
    const user1 = Object.create(userPrototype);
    user1.name = "Banu Prakash";
    user1.login(); 

    user1 doesn not have login()
    JS looks up the prototype chain
    finds login() in userPrototype
    this === user1; // true
```

Object owned instance methods:
```
    function User(name, age) {
        this.name = name
        this.age = age;
    }

    User.prototype.getName = function () {
            return this.name;
        }
    User.prototype.getAge = function() {
            return this.age;
        }
    let u1 = new User("Roger", 32);
    let u2 = new User("Rita", 24);

```

By default classes are based on prototype; all methods declared within a class will be added to class prototype

React.cloneElement is a utility function in React that creates and returns a new React element using a provided element as a starting point, while also allowing you to add, override, or modify its props and children. 

Singleton Pattern:
The Singleton pattern is a creational design pattern that restricts a class to a single instance while providing global access to it. 

It ensures that only one object of a specific type exists, which is initialized on demand and shared across an application. Key use cases include database connections, logging systems, and configuration managers. 

Redux StateManagment: Redux Store is singleton

====

Note: ES Modules (ESM) in JavaScript treat modules as singletons by default. 
When an ES module is imported multiple times across different files in an application, the code within that module is executed only once—the very first time it is imported. Subsequent imports return a cached, shared instance of the exported values. 

```
class ProductService {
    
}

export default new ProductService();

ComponentA;
import ProductService from './ProductService'; // instance

ComponentB;
import ProductService from './ProductService'; // same instance, singlton
```

 Structural Pattern:

 Composite Pattern:
 Tree Structure, clients treat individual objects/components and composite uniformly

React Perspective: Lead -- stateless simple component
Composite --> has children

```
Leaf

```
export function Button(...) {

}

export function Image(..) {

}
```

Composite:
```
export function Form({children}: {children: React.ReactNode}) {
    return <form>
        <h1>Signup</h1>
        {children}
    </form>
}
```

Products and Boxes.
A Box cantain several Products as well as smaller boxes,
Little box can alos hold boxes or products.

 

Day 3:
Simple creation?        → Factory
Families of objects?    → Abstract Factory
Complex construction?   → Builder
Clone existing object?  → Prototype
* Chess Pawns
* Word Template [Resume , Invoice]
One global instance?    → Singleton
* Shared storage

1. Factory Method
Use when:
You want to delegate object creation to subclasses
The exact type isn’t known at compile time
You want to follow Open/Closed Principle

2. Abstract Factory
Use when:
You need to create families of related objects
Objects must be compatible with each other
You want to swap entire families at once

3. Builder
Use when:
Object construction is complex
Many optional fields
You want step-by-step creation

4. Prototype
Use when:
Object creation is expensive
You need many similar objects
You want to clone instead of recreate

5. Singleton
Use when:
Exactly one instance must exist
Global access is required

6. React Specific Patterns: 
======

Structural Pattern:
Bridge Pattern: Split a large class of set of closely related classes into a seperate hierarchies

Abstraction (Payment type)
    * OneTimePayment
    * SubscriptionPayment
    * RefundPayment
   
Implementation (Gateway)
    * Stripe
    * RazorPay
    * PayPal

Implementation (Logging)
    * Console
    * File

Total number of classes without Bridge Pattern:
3 Payment types * 3 Gateways
* OneTimeStripePayment
* OneTimeRazorPayPayment
* OneTimeRazorPayPalPayment
* SubscriptionPaymentStripePayment
* SubscriptionPaymentRazorPayPayment
* SubscriptionPaymentPayPalPayment
* RefundPaymentStripePayment
* RefundPaymentRazorPayPayment
* RefundPaymentRazorPayPalPayment

Growth Problem:
 * Add InstallmentPayment
 * New Gateway -> Square

 Without Bridge: 4 x 4 = 16 classes

 Example:
 ```
    // Abstraction
    export abstract class Payment {
        protected gateway: PaymentGateway; // Implementor
        protected logging: Logging;
        constructor(...)

        abstract pay(amount: number);

        abstract log(msg:string);
    }
    Delegate work to implementor

    // Refined Abstraction
    export class SubscriptionPayment extends Payment {
        pay(amount: number) {
            this.gateway.pay(amount);
        }

    }

    // implementor
     export abstract class PaymentGateway {
        pay(amount:number);
     }

     export class StripeImpl extends PaymentGateway {
        pay(amount: number) {
            // concreate implementation
            stripe.confirmPayment(amount);
        }
     }

     // StripeImpl knows everything about Stripe, can change independently
     // Any changes will not effect payment

    If I Need a new Gateway, only one class SquareImpl is added
    If I need a new InstallmentPayment, only one class InstallmentPayment is added
 ```

 React Specific Bridge Pattern Example:
 * View Types -> ShortView, LongView, GridView
 * Media Types -> Artist, Album, PlayList

ShortViewArtist
ShortViewAlbum
LongViewAlbum
LongViewArtist


===========

Structural Pattern : Proxy Pattern
Provide a substitute or placeholder for another object.
Proxy controls access to orignail object, perform operations before or after request

Client --> request() --> Proxy --> request() --> realObject

Value Proxy : valueOf() method converts an object to a primative type

```
    class Percentage {
        constructor(percent) {
            this.percent = percent;
        }

        toString() {
            return `${this.percent} % `;
        }

        valueOf() {
            return this.percent / 100;
        }
    }

    let fivePercent = new Percentage(5); // object
    let value = 100 * fivePercent; // treat object as primitive

```

ES 6 / ECMAScript 2015 introduced Proxy Object
allows operations lie get, setm apply to redefine properties.
Commonly used : log, validation, format, sanitize, ...

Syntax:
let proxy = new Proxy(target, handler);
target -- is an object to wrap
handler - control the behaviours on target

Proxy Traps:
1) The get() trap
2) The set() trap
3) The apply() trap

=================

UI Proxy: 
Show a lightweight placeholder (proxy) until the real component is ready - exactly how YouTube does it.

=============

Flyweight Pattern:
 Conserves memory by sharing expensive objects, objects which require more space
 Flyweight objects are immutable
 Benefits: reduce memory consumption, increase performance

    ```
        function Flyweight(make, model, processor) {
            this.make = make;
            this.model = model;
            this.processor = processor;
        }

        let FlyWeightFactory = ( function[] {
            var flyweights = [];
            return {
                get: function (make, model, processor) {
                    if(!flyweights[make + model]) {
                        flyweights[make + model] = new Flyweight(make, model, processor);
                    }

                    return flyweights[make + model] ;
                }
            }
        })

        function ComputerCollection() {
            var computers = [];

            return {
                add: function ( make, model, processor, memory, tag) {
                    computers[tag] = new Computer(...)
                }
            }
        }

        let Computer = function(make, model, processor, memory, tag) {
            this.flyweight = FlyWeightFactory.get(make, model, processor);
            this.memory = memory;
            this.tag = tag;
            ...
        }
        let computers = new ComputerCollection();
        computers.add("Dell", "Studio XPS", "Intel", "5G", "YLPT");
        computers.add("Dell", "Studio XPS", "Intel", "6G", "FGTR");
        computers.add("Dell", "Studio XPS", "Intel", "2G", "LOFS");
        // 40 + models

```
Share inrinsic state between many objects 
FlyWeight - React 
* Shared UI Structure + styles

When it makes sense in React:
* Large Lists like Youtube, Amazon having same layout, different data
* Expensive Components (icons, charts, media cards)
* Avoid recreating havy JSX

not useful for small lists and different structure

Without Flyweight:
```
Each Render:
* New JSX tree
* New Style Objects
* Repeated Structures

 {products.map(p => (
                    <div key ={p.id} className="card">
                        <div className="thumb" />
                        <h4>{p.title}</h4>
                        <p>{p.price}</p>
                    </div>
                ))}

```

FlyWeight : Share Structure
React.memo() : Skip re-render

===>
React.createElement() ==> JSX and gets JS Object [VDOM tree]
render() => JS Object [VDOM tree] ==> DOM 

Without Flyweight:
JSX -> Card
JSX -> Card
JSX --> Card

With Flyweight:
JSX -> JS one place and Shared for every DOM creation for Product

===========

A -> B
Should i memoize B?
Isn't re-rendering B better if its a simple Atom

A -> B -> C -> D - > E
memoize B: it can prevent B -> C -> D - > E re-render

Adapter structural pattern:
Allows Object with incompatible interfaces to collabrate.

Stock Data Provider --> XML -> Adapter(XML-JSON) -->  React Component (needs JSON)

======

Day 4:
Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient
-Adapter, Bridge, composite, proxy, flyweight

Behavioural design patterns:
Assignment of resposibilities between objects.

Visitor Pattern:
A visitor pattern is a software design pattern that separates the algorithm from the object structure. 
Because of this separation, new operations can be added to existing object structures without modifying the structures.
Visitor: new logic, seperate from the entity

How it works?
* Dynamic Dispatch: method is determined dynamically at runtime based on the actual instance type of object
shape.render(); // renders Circle or Recatangle based on what shape is pointing to.. 

* Single Dispatch: based on the actual instance type of object
* Double Dispatch: decides the method to call based on both the object type and argument type.
    vistor.visit(elem);

Example: Document: Paragraph, Heading, Link

HTMLVisitor, PlainText Visitor


Plugins
@babel/preset-env: Visitor --> Syntax transform, polyfill
@babel/preset-react: Visitor-> JSX -> JS object

https://astexplorer.net/

npm i babel-cli babel-loader