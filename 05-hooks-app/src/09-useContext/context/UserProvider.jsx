import { useState } from "react"
import { UserContext } from "./UserContext"

/*
const user = {
    id: 123,
    name: 'Julio Chacon',
    email: 'jchacon@email.com'
}
*/

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
