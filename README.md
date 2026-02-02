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

Dependency Injection: