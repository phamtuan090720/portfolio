import React, { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('Container/Home'));

export default [{
    path: '/',
    component: HomePage
},];