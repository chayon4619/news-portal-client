import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaGripHorizontal } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel/BrandCarousel';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { googleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us on :</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> What's App</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGripHorizontal /> Terms & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;