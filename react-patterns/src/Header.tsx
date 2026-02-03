import { useEffect, useState } from "react"
import Counter from "./Counter"

export default function Header() {
    const [count, setCount] = useState(Counter.getCount());
    
    useEffect(() => {
        Counter.subscribe(() => {setCount(Counter.getCount())})
    },[]);

  return (
    <div>Header Count: {count}</div>
  )
}
