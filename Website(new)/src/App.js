import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AboutPageFull from './components/AboutPageFull';
import ProjectsSection from './components/ProjectsSection';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import TeamPage from './components/TeamPage';
import TeamSection from './components/TeamSection';
import SponsorsSection from './components/SponsorsSection';
import BlogSection from './components/BlogSection';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import ContactPage from './components/ContactPage';
import SponsorshipPage from './components/SponsorshipPage';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <AboutPage />
                <ProjectsSection />
                <TeamSection />
                <SponsorsSection />
                <BlogSection />
                <Footer />
              </>
            } />
            <Route path="/about" element={<><AboutPageFull /><Footer /></>} />
            <Route path="/projects" element={<><ProjectsPage /><Footer /></>} />
            <Route path="/projects/:projectId" element={<><ProjectDetail /><Footer /></>} />
            <Route path="/team" element={<><TeamPage /><Footer /></>} />
            <Route path="/blog" element={<><BlogPage /><Footer /></>} />
            <Route path="/blog/:blogId" element={<><BlogDetail /><Footer /></>} />
            <Route path="/contact" element={<><ContactPage /><Footer /></>} />
            <Route path="/sponsorship" element={<><SponsorshipPage /><Footer /></>} />
            <Route path="/search" element={<><SearchResultsPage /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
