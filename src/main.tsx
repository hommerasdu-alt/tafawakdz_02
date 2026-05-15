import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Ensuite, enveloppe tes routes avec <Suspense>
<Suspense fallback={<div>Chargement...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>