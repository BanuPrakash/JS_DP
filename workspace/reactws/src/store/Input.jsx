import React from 'react'
import { useStore } from './Store'

export default function Input() {
  let [store, setStore] = useStore();
  return (
    <div>
      <input type='text' onChange={evt => setStore(evt.target.value)}/>
    </div>
  )
}
