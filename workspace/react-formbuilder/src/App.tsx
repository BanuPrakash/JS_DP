import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormBuilder } from './forms/Builder';

function App() {
  const inputs = FormBuilder.init()
    .inputDefault({ label: "Name" })
    .inputDefault({ label: "Email" })
    .inputDefault({ label: "Age" })
    .checkbox({ label: "I have read Terms and Conditions" })
    .build();

  return (
    <div className='App'>
      {inputs}
    </div>
  );
}

export default App;
