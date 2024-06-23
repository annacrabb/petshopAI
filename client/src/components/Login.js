import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin'
import Logo from '../assets/TIDE TOGETHER.png';
import Banner from '../assets/acknow.banner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div>
            <img
                src={Banner}
                className="img-fluid"
                width="100%"
                alt="reef"
            />
            <div className="container my-5 text-center customHeader">
                <h1 className="customHeader">Log In</h1>
            </div>
            <div className="container">

                <form className="login" onSubmit={handleSubmit}>
                    <h3>Log In</h3>

                    <label>Email address:</label>
                    <input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label>Password:</label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button disabled={isLoading}>Log In</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )

}

export default Login