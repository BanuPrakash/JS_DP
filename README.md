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