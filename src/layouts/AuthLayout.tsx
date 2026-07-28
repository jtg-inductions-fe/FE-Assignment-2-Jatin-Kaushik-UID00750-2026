import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
    <div>
        <header>
            <h1>Welcome to Nosh</h1>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
);
