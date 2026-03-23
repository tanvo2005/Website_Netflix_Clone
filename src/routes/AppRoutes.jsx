import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
