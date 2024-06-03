import { useContext, useRef } from "react"
import { UserLoggedInContext } from "../layout/MainLayout"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LoggedInUserType } from "../types/LoggedInUserType";

const LoginForm = () => {

    //const loggedInContext = useContext(UserLoggedInContext)
    //const loggedIn = loggedInContext ? loggedInContext[0] : false
    const [user, setUser] = useLocalStorage<LoggedInUserType>("userState")
    const loggedIn = user != null

    const firstname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    function login(e: any) {
        e.preventDefault()
        setUser({
            firstname: firstname.current?.value, 
            email: email.current?.value
        })

        /*localStorage.setItem("userState", JSON.stringify({
            firstname: firstname.current?.value, 
            email: email.current?.value}
        ))
        if (loggedInContext) {
            const [_, setLoggedIn] = loggedInContext
            setLoggedIn(true)
        }*/
    }

    return (
        <>
            <h2>Login</h2>
            <br />
            {loggedIn ? "Logged In" : "Logged Out"}<br />
            <br />
            <form onSubmit={login}>
                <input ref={firstname} type="text" name="firstname" placeholder="first name"/>
                <input ref={email} type="email" name="email" placeholder="email"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginForm