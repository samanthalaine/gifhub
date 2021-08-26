import React, {useState} from 'react'
import { TextField } from '@material-ui/core';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details)

    }

    return (
        <form className="login" onSubmit={submitHandler}>
            <div className="inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <TextField variant="filled"  type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <TextField variant="filled"  type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <TextField  variant="filled"  type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input className="button"type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
