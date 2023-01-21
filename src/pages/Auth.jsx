import { useState } from 'react';
import { useNavigate } from 'react-router';
import supabase from '../database/supabase-client.js';

const Auth = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPass , setSignInPass]  = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPass , setSignUpPass]  = useState('');

    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: signInEmail,
            password: signInPass
        });

        if(error) {
            alert(error.message);
        }
        else if(data) {
            console.log('data: ', data);
            navigate('/');
        }
    }

    const signUp = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email: signUpEmail,
            password: signUpPass
        });

        if(error) {
            console.log('error: ', error);
        }

        if(data) {
            console.log('data: ', data);
            navigate('/');
        }
    }


    return (
        <div>
            <h3>Auth Page</h3>
            <form onSubmit={(e) => signIn(e)}>
                <h4>Sign In</h4>
                <label htmlFor="sign-in-email">Email:</label>
                <input type="text" id="sign-in-email" value={signInEmail} onChange={e => setSignInEmail(e.target.value)}/>
                &nbsp;
                <label htmlFor="sign-in-password">Password:</label>
                <input type="password" id="sign-in-password" value={signInPass} onChange={e => setSignInPass(e.target.value)}/>
                <button type="submit">Sign In</button>
            </form>
            <br/>
            <form onSubmit={(e) => signUp(e)}>
                <h4>Sign Up</h4>
                <label htmlFor="sign-up-email">Email:</label>
                <input type="text" id="sign-up-email" value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)}/>
                &nbsp;
                <label htmlFor="sign-up-password">Password:</label>
                <input type="password" id="sign-up-password" value={signUpPass} onChange={e => setSignUpPass(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Auth;
