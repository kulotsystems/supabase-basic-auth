import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

// pages
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
