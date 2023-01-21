import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import supabase from '../database/supabase-client.js';

const Home = () => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession();

            if(error) {
                alert(error.message);
            }
            else if(data) {
                setUser(data.session?.user);
            }
        };
        getSession().then(r => {});
    }, []);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <div>
            <h3>Home Page</h3>
            { user ? (
                    <div>
                        <h1>Authenticated</h1>
                        <p style={{ margin: 0 }}>{ user.email }</p>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                )
                : (
                    <div>
                        <h1>Unauthenticated</h1>
                        <button onClick={() => navigate('/auth')}>Sign In / Sign Up</button>
                    </div>
                )}
        </div>
    );
};

export default Home;
