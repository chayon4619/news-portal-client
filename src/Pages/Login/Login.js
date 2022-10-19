import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {

    const { logIn } = useContext(AuthContext);

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
            })
            .catch(error => console.error(error))


    }

    return (
        <Form onSubmit={handelLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button> <br />
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    );
};

export default Login;