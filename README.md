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
    Behavioural pattern: Command, vistor, strategy, observer, memento, ...

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

