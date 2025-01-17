# Frontend Design Patterns
Banuprakash C

Full Stack Architect,
Co-founder & CEO Lucida Technologies Pvt Ltd.,
Corporate Trainer & Consultant,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/JS_DP

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

==========================

```

class Product {
    id, name, price
}

class Tv extends Product {
    screenType, screenSize
}

class Mobile extends Product {
    connectivity, camera
}

```

ISP:

```
    interface AdminService {
        createAccount();
        deleteAccount();
        blockAccount();
    }

    interface CustomerInterface {
        debit(amt);
        credit(amt);
    }

    class BankingService implements AdminSevice, CustomerInterface {
        createAccount();
        deleteAccount();
        blockAccount();
        debit(amt);
        credit(amt);
    }

    If Admin logins in:
    adminService = new BankingService();

```

In JS/TS Dependecny Injection can be acheived using IoC Containers [like Spring Container]:
* InversifyJS
* Typed Inject
* TypeDI
* TSyringe

TSyringe example for DI
diexample> npm init --y
diexample> npm i typescript tsyringe reflect-metadata @types/node

Node JS libraries are in JavaScript
@types/node --> types defenition for Node JS libraries

Example:
@types/react contain types definition for React JS library

diexample> tsc --init

==============================

Builder Pattern in react.
Building Form components
input+, checkbox+, dropdown+, 

yarn create react-app -- react-formbuilder --template typescript
react-formbuilder> npm i @testing-library/react@latest
react-formbuilder> npm i @mui/material @emotion/react @emotion/styled

One more example --> share it 

=============================

Compound Pattern  [ Not GangOf4]
Compound components --> <select> <option>
Pattern in which components are used together, share state and communicate with each other in the backbround

Issues:
1) Maybe not show Author
2) Maybe order can change
3) Not show buttons ,,

ReactContext should be used in Compound Pattern  to share state between then

===========

Day 1 Recap:

SOLID Design Principles
IoC Container
A -> B --> C --> D

Design Pattern: Builder pattern

Compound Pattern of React

@Builder --> lombok

Day 2:

Factory Pattern: wholesale creation of Objects (not piecewise)
Motivation
* Object creation becomes too complicated/complex
 Database Connection pool object [url, user, pwd, poolsize,..]
* Object creation can be outsourced

client: getConnection();

Abstract Factory Pattern

================

Prototype: 
Example: ChessBoard : Pawn -> 16, Word Templates

React.createElement()
React.cloneElement() function enables developers to clone a React Element. allowing modifications to its props and children. Used especially for enhancing or customization children components

const clone = React.cloneElement(element, props, ...children);

Singleton: Redux Store is a singleton
Store as singleton, later we will add Observer pattern, making it work like Redux Store

===============

HOF: 
1) function takes a function as argument
2) function returns a function

React HOC as Decorator Pattern

High Order Component: takes a component and returns the component.
Returned component can have extra state and behiavour

=======

new Computer("Dell", "Studio XPS", "intel", "5G", "ASRC");
new Computer("Dell", "Studio XPS", "intel", "6G", "OSXC");
new Computer("Dell", "Studio XPS", "intel", "2G", "OPAX");



FlyWeight object ==> "Dell", "Studio XPS", "intel" 

=================

ValueProxy: JS calls valueOf() method to covert an object to a primitive value. JS implicilty invokes, we don't need to call it like toString()

ES 6 Proxy: Proxy object allows to create an object in place of original object.
helps in log, validate, format, sanitize 

=================

https://medium.com/coding-beauty/javascript-intersection-observer-cded4e80a377


Proxy
Bridge
Behavioral Patterns: Command, Iterator, Observer, Visitor

===========

Day 3:
ES6 - ES2025 Proxy Api.
set() get() and apply() traps

```
function update(..) {

}

let product = {

}

let customer = {
    
}
update.apply(product, [4, "Tim"]);
update.call(product, 4, "Tim");
```

Bridge Pattern: Structural pattern - lets you split class or set of closely related classes into seperate hierarchies [ abstraction and implementor]

Abstraction and Implementation; seperation of concerns

1) Abstraction is a high level control delegates work to Implementation layer

2) Implementation, platform-specifc code

Views: LongView, ShortView, ConceptualView
Resources: Artist, Album, PlayList

Inheritance Approach:
* LongViewArtist
* LongViewAlbum
* LongViewPlayList
* ShortViewArtist
* ShortViewAlbum
* ShortViewPlayList
* ConceptualViewArtist
* ConceptualViewAlbum
* ConceptualViewPlayList

```
    // Abstraction
    class View {
        constructor(resource) {
            this.resource = resource;
        }
        show() {
            
        }
    }

    class LongView extends view {
        constructor(resource) {
            super(resource);
        }

        show() {
            this.resource.snippet();
        }
    }

     class ShortView extends view {
        constructor(resource) {
            super(resource);
        }

        show() {
            this.resource.snippet();
        }
    }
    // implementor
    class Resource {
        snippet() {
            ..
        }
    }

    class Artist extends Resource {
        snippet() {
            ..
        }
    }

     class Album extends Resource {
        snippet() {
            ..
        }
    }
    class PlayList extends Resource {
        snippet() {
            ..
        }
    }
```

Iterator: traverse elements in collection

The Symbol.iterator static data property represents the well-known symbol Symbol.iterator returns an Iterator

next(); done [boolean], value

===========================

Vistor Pattern: defines a new operation to a collection of objects without changing the objects themselfs.

Single Dispatch: decides the method to call based on the object type
ref.buy();
Double Dispatch: decides a method to call baesd on both the object type and the argument type
ref.buy(arg);


Babel uses Vistor Pattern
plugins are visitor
@babel/preset-env --> Syntax transform; arrow fn to normal fn, let to var ,...
@babel/preset-react --> JSX to JS object

Parse --> Traverse & Transform ==> generate Tokens [ AST]

npm init --y
npm i babel-cli babel-loader

.babelrc

```
import utils from "/Users/banuprakash/Documents/codes/JS/adobe/JS_DP/workspace/babel_visitor/lib//utils";

var greeting = "Hi";
console.log(utils);
console.log(greeting);

```

https://astexplorer.net/