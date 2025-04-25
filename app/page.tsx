import Header from './components/Header';
import Stats from './components/Stats';
import Categories from './components/Categories';
import Achievements from './components/Achievements';
import RecentActivity from './components/RecentActivity';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="min-h-screen">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Stats />
          <Categories />
          <Achievements />
          <RecentActivity />
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex justify-around">
            <a href="#" className="flex flex-col items-center py-3 px-4 text-indigo-600">
              <i className="fas fa-home text-xl"></i>
              <span className="text-xs mt-1">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center py-3 px-4 text-gray-500">
              <i className="fas fa-tasks text-xl"></i>
              <span className="text-xs mt-1">Quests</span>
            </a>
            <a href="#" className="flex flex-col items-center py-3 px-4 text-gray-500">
              <i className="fas fa-chart-line text-xl"></i>
              <span className="text-xs mt-1">Stats</span>
            </a>
            <a href="#" className="flex flex-col items-center py-3 px-4 text-gray-500">
              <i className="fas fa-trophy text-xl"></i>
              <span className="text-xs mt-1">Achievements</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
