import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <Suspense fallback={<InfinitySpin visible={true} width="200" color="maroon" ariaLabel="infinity-spin-loading" />}>
            <Outlet />
        </Suspense>
    );
}

export default Layout;
