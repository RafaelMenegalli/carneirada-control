import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                } />

                <Route path="/categories" element={
                    <DashboardLayout>
                        <Categories />
                    </DashboardLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}
