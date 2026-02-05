// import Builder from "./builders/Builder";
import "./App.css"
// import { LightThemeFactory } from "./factory/factories";
// import PostCard from "./compound/PostCard";
 
// import Counter from "./Counter";
// import Header from "./Header";
import React, { useState } from "react";
// import Bridge from "./bridge/Bridge";
// import ProxyComp from "./proxy/ProxyComp";
import ProductList from "./flyweight/ProductList";
 

// @ts-ignore
const SpanWithText = ({text, ...props}) => {
  return (
    <span {...props}>
      {text}
    </span>
  )
}

// @ts-ignore
const ColorContainer = ({children}) => {
  return React.cloneElement(children, {
    style: {
      backgroundColor: 'khaki',
      padding: "10px",
      color: 'brown'
    }
  })
}

// HOC: withColor(Component) => Component
function App() {
    // const factory = new DarkThemeFactory();
  //   const factory = new LightThemeFactory();
  //   const Button = factory.createButton();
  //   const Card = factory.createCard();

  //  const elements = new Builder()
  //           .input({label:'Name'})
  //           .input({label:'Email'})
  //           .input({label:'Password'})
  //           .checkbox({label:'Subscribe to NewsLetter'})
  //           .build();
  
  //     function handleIncrement() {
  //       Counter.increment()
  //     }

    // const products  = [
    //   {
    //     "title": "A",
    //     "price": 100
    //   },
    //   {
    //     "title": "B",
    //     "price": 100
    //   },
    //   {
    //     "title": "C",
    //     "price": 100
    //   },
    //   {
    //     "title": "D",
    //     "price": 100
    //   },
    //   {
    //     "title": "E",
    //     "price": 100
    //   },
    //   {
    //     "title": "F",
    //     "price": 100
    //   },
    //   {
    //     "title": "G",
    //     "price": 100
    //   },
    //   {
    //     "title": "H",
    //     "price": 100
    //   },
    //   {
    //     "title": "I",
    //     "price": 100
    //   },
    //   {
    //     "title": "J",
    //     "price": 100
    //   }
    // ]
    // let [show, setShow] = useState<boolean>(false);

    return <div className="App">
      
      {/* <button onClick={() => setShow(true)}>Show</button>
      {
        show && <ProductList products={products}/>
      } */}
      
      {/* <ProxyComp />
      <Bridge />
      <Header />
      <button onClick={handleIncrement}>Increment!!!</button>
      <ColorContainer>
        <SpanWithText text="Adobe!!!" />
      </ColorContainer>
      {/* <PostCard 
      showProfile
      post={
        {
          id: 1,
          title: "Hello World!!!",
          content: "This is my first Post",
          user: {
            id: 51,
            name: 'Larry'
          }
        }
      }/> */}
      {/* <PostCard 
      post={
        {
          id: 1,
          title: "Hello World!!!",
          content: "This is my first Post",
          user: {
            id: 51,
            name: 'Larry'
          }
        }
      }>
          <PostCard.Title />
          <PostCard.Buttons />
          <PostCard.User />
      </PostCard>
     <Button onClick={() => alert("Hello")}>Click Me!!!</Button> <br />
     <Card>
        <h2>iPhone 17</h2>
        <h4>Price 89000.00</h4>
     </Card>
     {elements} */} 
    </div>
  
}

export default App
