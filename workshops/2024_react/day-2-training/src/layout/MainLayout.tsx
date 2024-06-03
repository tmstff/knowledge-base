import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/main.css"
import { Dispatch, SetStateAction, createContext, useState } from "react"

export const ThemeContext = createContext<"dark" | "light">("dark")
export const UserLoggedInContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {} ])

const MainLayout = () => {

  const userLoggedInContext = useState(localStorage.getItem("userState") == null)

  return (
    <>
      <ThemeContext.Provider value="light">
        <UserLoggedInContext.Provider value={userLoggedInContext}>
          <Header />
          <div className="content"><Outlet /></div>
          <Footer />
        </UserLoggedInContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default MainLayout