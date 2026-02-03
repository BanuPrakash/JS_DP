import Builder from "./builders/Builder";
import "./App.css"
import { DarkThemeFactory, LightThemeFactory } from "./factory/factories";
import PostCard from "./compound/PostCard";

function App() {
    // const factory = new DarkThemeFactory();
    const factory = new LightThemeFactory();
    const Button = factory.createButton();
    const Card = factory.createCard();

   const elements = new Builder()
            .input({label:'Name'})
            .input({label:'Email'})
            .input({label:'Password'})
            .checkbox({label:'Subscribe to NewsLetter'})
            .build();
  return (
    <div className="App">
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
      <PostCard 
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
     {elements}
    </div>
  )
}

export default App
