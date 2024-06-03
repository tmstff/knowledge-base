import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserLoggedInContext } from "../layout/MainLayout"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { LoggedInUserType } from "../types/LoggedInUserType"

const Footer = () => {

  const navigate = useNavigate()
  // const loggedInContext = useContext(UserLoggedInContext)
  const [user, setUser, removeUser] = useLocalStorage<LoggedInUserType>("userState")


  function logout(e: any) {
    removeUser() // refresh of loggin in state on login page only works because a reload is triggered by the form
  }

  /*const loggedIn = user != null

  function logout(e: any) {
    e.preventDefault()
    localStorage.removeItem("userState")
    if (loggedInContext) {
      const [_, setLoggedIn] = loggedInContext
      setLoggedIn(false)
    }
  }*/

  return (<div>
    <form onSubmit={(e) => { e.preventDefault(); navigate("/login") }}>
      <button type="submit" style={{ padding: 0, border: "none", background: "none", color: "white" }}>Login</button>
    </form>
    <form onSubmit={logout}>
      <button type="submit" style={{ padding: 0, border: "none", background: "none", color: "white" }}>Logout</button>
    </form>
  </div>
  )
}

export default Footer