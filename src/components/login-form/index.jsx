import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useStore } from '../../store';
import { login } from '../../store/auth/Auth-Actions';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://carrental-v3-backend.herokuapp.com';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatchAuth } = useStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }
            const payload = { email, password };
            const responseAuth = await axios.post(`${API_URL}/login`, payload);
            const token = responseAuth.data.token;

            const authHeader = { Authorization: `Bearer ${token}` };

            const respUser = await axios.get(`${API_URL}/user`, {
                headers: authHeader,
            });
            const user = respUser.data;

            dispatchAuth(login(user));

            navigate('/', { replace: true });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleLogin} noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default LoginForm;
