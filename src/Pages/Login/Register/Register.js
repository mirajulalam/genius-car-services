import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';



const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);



    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    };
    if (user) {
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password, name);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary'>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} htmlFor="terms">Accepts Genius car and Terms Condition</label> */}
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accepts Genius car and Terms Condition</label>
                <input disabled={!agree} className='btn btn-primary w-50 mx-auto d-block mt-2' type="submit" value="Submit" />
            </form>
            <p>Already have an account?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;