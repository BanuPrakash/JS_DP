import { useEffect, useState } from "react";
import useInjection from "./hooks/useInjection"
import type UserService from "./services/UserService"


export default function Profile() {
  const userService = useInjection<UserService>("UserService");
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(userService.getUser());
  }, []);
  
  return (
    <div>
        Hello , {user}
    </div>
  )
}
