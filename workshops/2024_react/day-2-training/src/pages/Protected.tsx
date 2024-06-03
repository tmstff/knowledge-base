//import { useContext } from "react"
import { Navigate, Outlet, redirect } from "react-router-dom"
//import { UserLoggedInContext } from "../layout/MainLayout"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { LoggedInUserType } from "../types/LoggedInUserType"

const Protected = () => {

    const [value, setValue, removeValue] = useLocalStorage<LoggedInUserType>("userState")

    //const loggedInContext = useContext(UserLoggedInContext);
    //const loggedIn = loggedInContext ? loggedInContext[0] : false

    const loggedIn = value != null

    if (!loggedIn) {
        return <Navigate to="/login"/>
    }

    return (
        <div>
            <h1>Protected</h1>
            {loggedIn && <Outlet />}
        </div>
    )
}

export default Protected