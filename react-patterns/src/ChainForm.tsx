import { useRef, useState } from "react";

interface Handler<T> {
    setNext(handler:Handler<T>): Handler<T>;
    handle(request: T): string | null
}

abstract class BaseHandler<T> implements Handler<T> {
    private nextHandler?:Handler<T>;
    setNext(handler: Handler<T>): Handler<T> {
        this.nextHandler = handler;
        return handler; // enables chaining
    }
    handle(request: T): string | null {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
} 

class RequiredValidator extends BaseHandler<any> {
    handle(request: any): string | null {
        if(!request.email || !request.password) {
            return "Email and password are required!!!"
        }
        return super.handle(request);
    }
}

class EmailValidator extends BaseHandler<any> {
    handle(request: any): string | null {
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(request.email)) {
            return "invalid email format";
        }
        return super.handle(request);
    }
}



export default function ChainForm() {
  const [error, setError] = useState<string|null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const validate = (data: any) => {
    const required = new RequiredValidator();
    const email = new EmailValidator();
    required.setNext(email);
    return required.handle(data);
  }

  const onSubmit = () => {
    let email:string = emailRef!.current!.value;
    const error = validate({
        email,
        password: "test123"
    });

    if(error) {
        setError(error)
        return;
    }
    alert("Success!!!");
  }
  return (
    <div>
        <h1>Registration Form</h1>
        {error}
        <form>
            <input type="email" placeholder="email" ref={emailRef}/>
            <button type="button" onClick={onSubmit}>Login</button>
        </form>
    </div>
  )
}
