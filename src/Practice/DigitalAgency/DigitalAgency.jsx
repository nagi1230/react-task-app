import { useEffect, useState } from 'react';
import './digital-agency.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

/**
 * SquareUp — a rebuild of the Figma file
 * "Digital Agency Company Website UI Design Template in Dark Theme"
 * (node 3-53), covering all seven pages at the three breakpoints the
 * design specifies: 1920 desktop, 1440 laptop, 390 mobile.
 *
 * Navigation is local state rather than react-router, so the component drops
 * into any tree without needing a Router above it.
 */
const PAGES = {
  home: HomePage,
  services: ServicesPage,
  works: WorksPage,
  process: ProcessPage,
  about: AboutPage,
  careers: CareersPage,
  contact: ContactPage,
};

export default function DigitalAgency() {
  const [page, setPage] = useState('home');

  // Jump back to the top when the page changes, as a real router would.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  const navigate = (id) => {
    if (PAGES[id]) setPage(id);
  };

  const ActivePage = PAGES[page];

  return (
    <div className="da-root min-h-screen">
      <a
        href="#da-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-da-lime focus:px-4 focus:py-2 focus:text-da-bg"
      >
        Skip to content
      </a>

      <Navbar current={page} onNavigate={navigate} />

      <main id="da-main">
        <ActivePage onNavigate={navigate} />
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
