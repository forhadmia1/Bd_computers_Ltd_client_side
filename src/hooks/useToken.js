import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name }
    if (email) {
        fetch(`https://lit-caverns-37458.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token)
                setToken(data.token)
            })
    }
    return [token]
};

export default useToken;