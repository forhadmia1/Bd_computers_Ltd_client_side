import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (user) {
            const email = user.email;
            fetch(`http://localhost:5000/admin?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin)
                    setAdminLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoading];
};

export default useAdmin;