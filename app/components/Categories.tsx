export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Life Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Finances */}
        <div className="category-card bg-white rounded-xl shadow-md p-6 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Finances</h3>
              <p className="text-sm text-gray-500">Manage your gold</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded-full">
              <i className="fas fa-coins text-yellow-500"></i>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Current Balance</span>
              <span className="font-semibold">$4,250</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '42%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Monthly Goal: $10,000</span>
              <span>42%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-blue-50 p-2 rounded-lg text-center">
              <p className="text-xs text-gray-500">Income</p>
              <p className="font-semibold text-blue-600">$3,200</p>
            </div>
            <div className="bg-red-50 p-2 rounded-lg text-center">
              <p className="text-xs text-gray-500">Expenses</p>
              <p className="font-semibold text-red-600">$1,750</p>
            </div>
          </div>
          
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            View Details
          </button>
        </div>

        {/* Tasks & Productivity */}
        <div className="category-card bg-white rounded-xl shadow-md p-6 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Tasks & Quests</h3>
              <p className="text-sm text-gray-500">Complete for XP</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <i className="fas fa-tasks text-blue-500"></i>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Daily Quests</span>
              <span className="font-semibold">3/5 Completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="task1" className="rounded text-blue-500 mr-2" defaultChecked />
              <label htmlFor="task1" className="text-sm line-through text-gray-500">Morning workout</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="task2" className="rounded text-blue-500 mr-2" defaultChecked />
              <label htmlFor="task2" className="text-sm line-through text-gray-500">Read 30 minutes</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="task3" className="rounded text-blue-500 mr-2" defaultChecked />
              <label htmlFor="task3" className="text-sm">Work project (2h)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="task4" className="rounded text-blue-500 mr-2" />
              <label htmlFor="task4" className="text-sm">Call family member</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="task5" className="rounded text-blue-500 mr-2" />
              <label htmlFor="task5" className="text-sm">Learn new skill</label>
            </div>
          </div>
          
          <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Add New Quest
          </button>
        </div>

        {/* Relationships */}
        <div className="category-card bg-white rounded-xl shadow-md p-6 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Relationships</h3>
              <p className="text-sm text-gray-500">Your party members</p>
            </div>
            <div className="bg-pink-100 p-2 rounded-full">
              <i className="fas fa-users text-pink-500"></i>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Social XP</span>
              <span className="font-semibold">720/1000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-400 h-2 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-1">
                <i className="fas fa-user text-gray-500"></i>
              </div>
              <p className="text-xs">Family</p>
              <p className="text-xs font-semibold">85%</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-1">
                <i className="fas fa-user-friends text-gray-500"></i>
              </div>
              <p className="text-xs">Friends</p>
              <p className="text-xs font-semibold">65%</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-1">
                <i className="fas fa-briefcase text-gray-500"></i>
              </div>
              <p className="text-xs">Work</p>
              <p className="text-xs font-semibold">75%</p>
            </div>
          </div>
          
          <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Connect Now
          </button>
        </div>
      </div>
    </section>
  );
} 