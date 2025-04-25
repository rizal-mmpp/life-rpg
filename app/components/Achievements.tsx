export default function Achievements() {
  return (
    <section className="mb-12 bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Achievements</h2>
        <span className="text-sm text-gray-500">12/50 unlocked</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Achievement 1 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-2">
            <i className="fas fa-coins text-yellow-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold">First Gold</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Earned your first $100
          </div>
        </div>
        
        {/* Achievement 2 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
            <i className="fas fa-fire text-blue-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold">7-Day Streak</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Completed a 7-day workout streak
          </div>
        </div>
        
        {/* Achievement 3 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-2">
            <i className="fas fa-book text-green-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold">Bookworm</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Read 5 books
          </div>
        </div>
        
        {/* Achievement 4 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-2">
            <i className="fas fa-users text-purple-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold">Socializer</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Connected with 10 people
          </div>
        </div>
        
        {/* Achievement 5 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2">
            <i className="fas fa-medal text-red-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold">Level Up</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Reached Level 5
          </div>
        </div>
        
        {/* Achievement 6 */}
        <div className="achievement-badge text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <i className="fas fa-lock text-gray-500 text-2xl"></i>
          </div>
          <p className="text-xs font-semibold text-gray-400">Secret</p>
          <div className="achievement-tooltip hidden absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
            Locked achievement
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200">
        View All Achievements
      </button>
    </section>
  );
} 