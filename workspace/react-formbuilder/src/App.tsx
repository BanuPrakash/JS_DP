import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormBuilder } from './forms/Builder';
import PostCard from './compound/PostCard';

function App() {
  const inputs = FormBuilder.init()
    .inputDefault({ label: "Name" })
    .inputDefault({ label: "Email" })
    .inputDefault({ label: "Age" })
    .checkbox({ label: "I have read Terms and Conditions" })
    .build();

  return (
    <div className='App'>
      {/* {inputs} */}
      {/* <PostCard 
      post={{
        id: 12,
        title : "My First Post",
        content : "Details of First Post",
        user: {
          id: 62,
          name: 'Roger'
        }
      }
      }>
         <PostCard.Content />
         <PostCard.Title />
         <PostCard.User />
      </PostCard> */}
    </div>
  );
}

export default App;
