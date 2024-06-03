import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";
import { UserItemType } from "../../types/UserTypes";
import { useFetch } from "../../hooks/useFetch";

const Users = () => {


    const URL = "https://jsonplaceholder.typicode.com/users";

    const [userData, error, loading] = useFetch<UserItemType[]>(URL, [])

    const [users, setUsers] = useState<UserItemType[]>([]);
    const controller = new AbortController();
    const [isLoading, setIsLoading] = useState(false);
    const signal = controller.signal

    /*useEffect(
        () => {
            setIsLoading(true)
            console.log("useEffect fetch url")
            setTimeout(() => {
                console.log("fetch url")
                fetch(URL, {signal: signal})
                    .then(res => res.json())
                    .then(users => {
                        setUsers(users);
                        setIsLoading(false);
                    })

            }, 2000)
            return () => {
                controller.abort() // cancel current call
                console.log("cleanup fetch")
            }
        },
        []
    )*/

    //const userList = users.map(user => <UserItem key={user.id} user={user} />)
    const userList = userData.map(user => <UserItem key={user.id} user={user} />)

    return (
        <>
            <h1>Users</h1>
            {/*isLoading? <div>Loading ...</div> : userList*/}
            {error ? error : loading? <div>Loading ...</div> : userList?.length == 0 ? "no data" : userList}
        </>
    )
}

export default Users