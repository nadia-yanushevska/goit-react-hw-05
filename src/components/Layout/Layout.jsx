import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';

function Layout() {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
}

export default Layout;
