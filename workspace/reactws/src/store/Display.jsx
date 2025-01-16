import React, { useState } from 'react'
import { useStore } from './Store';

export default function Display() {
let [state, setState] = useState('');
let [store, setStore] = useStore();

const storeToState = () => {
    setState(store()); // getStore()
}
  return (
    <div>
        Data: {state}
        <button onClick={storeToState}>Get State</button>
    </div>
  )
}
