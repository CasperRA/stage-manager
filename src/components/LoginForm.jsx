import React, { Component }  from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "0e50bec2-4943-41cc-ac42-8d2e2b2d8abf", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            //Husk information for reload.
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

          
        } catch (error) {
            setError('Indtastet information kunne ikke findes. Prøv igen.')
        }
    }

    return (
        <section className="wrapper">
            <div className="form">
                <h1 className="title">Stage Planner</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Brugernavn" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Log Ind</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;