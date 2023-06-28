import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import TopPage from './page/TopPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/top" element={<TopPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter
