import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catIcon from '../../../assets/images/loginside_cate.png';
import './Login.css';
import { Button, Input } from '../../../components/ui';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/profile');
        }
    };

    return (

        <div className="screen">
            <div className="left-half">
                <img src={catIcon} alt="cat-character" />
            </div>
            <div className="right-half">
                <div className='right-container'>
                    <p>
                        <span>{"< Back"}</span>
                    </p>
                    <p>
                        <span>Welcome Back</span>
                    </p>
                    <p>
                        <span>Sign in to your account</span>
                    </p>

                    <form className='login-form' onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            placeholder='Email'
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            placeholder='Password'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button className='submit-btn' type='submit'>Sign In</Button>
                        <p className='login-link'> Don't have an account? <a href='/signup'>Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;