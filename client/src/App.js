import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
    return (
        <div className='bg-zinc-900 min-h-screen text-white px-10'>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
