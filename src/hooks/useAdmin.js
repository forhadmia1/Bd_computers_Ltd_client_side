import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        if (user) {
            const email = user.email;
            fetch(`http://localhost:5000/admin?email=${email}`)
                .then(res => res.json())
                .then(data => setAdmin(data.isAdmin))
        }
    }, [user])
    return [admin];
};

export default useAdmin;