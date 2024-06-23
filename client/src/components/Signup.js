import React, { useState } from 'react';
import Logo from '../assets/TIDE TOGETHER.png';
import Banner from '../assets/acknow.banner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
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
                <h1 className="customHeader">Sign Up</h1>
            </div>
            <div className="container">

                <form className="signup" onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

                    <label> Email:</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label>Password:</label>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button disabled={isLoading}>Sign Up</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )

}

export default Signup