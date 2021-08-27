import { Typography } from '@material-ui/core';
import React, {useState} from 'react'
import LoginForm from './LoginForm';

const Login = () => {

    const userDetails = {
        email: "andres@gifhub.com",
        password: "gifhub123"
    }


    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("")

    const Login = details => {
        console.log(details)

        if (details.email === userDetails.email && details.password === userDetails.password){
            console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email
            })
        }
        else{
            setError("Details do not match")
            console.log("Details do not match")
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""})
        console.log("Logout")
    }







    return (
        <div>
            {(user.email !== "") ? (
                <div className="container">
                    <Typography className="logout" variant="h1">Welcome, <span>{user.name}</span></Typography>
                    <button className="button" onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}  />
            )}
        </div>
    )
}

export default Login
