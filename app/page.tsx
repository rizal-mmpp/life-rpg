'use client';

import Header from './components/Header';
import Stats from './components/Stats';
import Categories from './components/Categories';
import Achievements from './components/Achievements';
import RecentActivity from './components/RecentActivity';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeHash, setActiveHash] = useState('#stats');

  useEffect(() => {
    // Set initial hash if none exists
    if (!window.location.hash) {
      window.location.hash = '#stats';
    }

    // Update active hash when URL changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set initial active hash
    setActiveHash(window.location.hash);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getNavLinkClass = (hash: string) => {
    const baseClasses = "flex flex-col items-center py-3 px-4 transition-colors";
    return `${baseClasses} ${
      activeHash === hash 
        ? "text-indigo-600" 
        : "text-gray-500 hover:text-indigo-600"
    }`;
  };

  return (
    <div className="bg-gray-100 font-sans">
      <div className="min-h-screen">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 pb-24 md:pb-8">
          <section id="stats" className="scroll-mt-20">
            <Stats />
          </section>
          <section id="categories" className="scroll-mt-20">
            <Categories />
          </section>
          <section id="achievements" className="scroll-mt-20">
            <Achievements />
          </section>
          <section id="activity" className="scroll-mt-20">
            <RecentActivity />
          </section>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex justify-around">
            <a 
              href="#stats" 
              className={getNavLinkClass('#stats')}
            >
              <i className="fas fa-chart-line text-xl"></i>
              <span className="text-xs mt-1">Stats</span>
            </a>
            <a 
              href="#categories" 
              className={getNavLinkClass('#categories')}
            >
              <i className="fas fa-th-large text-xl"></i>
              <span className="text-xs mt-1">Categories</span>
            </a>
            <a 
              href="#achievements" 
              className={getNavLinkClass('#achievements')}
            >
              <i className="fas fa-trophy text-xl"></i>
              <span className="text-xs mt-1">Achievements</span>
            </a>
            <a 
              href="#activity" 
              className={getNavLinkClass('#activity')}
            >
              <i className="fas fa-history text-xl"></i>
              <span className="text-xs mt-1">Activity</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
