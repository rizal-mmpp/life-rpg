export default function RecentActivity() {
  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
      
      <div className="space-y-4">
        {/* Activity 1 */}
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <i className="fas fa-check-circle text-green-500"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Completed "Morning Workout" quest</p>
            <p className="text-sm text-gray-500">+25 XP • 2 hours ago</p>
          </div>
          <div className="ml-auto text-yellow-500">
            <i className="fas fa-coins"></i> 10
          </div>
        </div>
        
        {/* Activity 2 */}
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-4">
            <i className="fas fa-plus-circle text-blue-500"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Added new skill "Spanish"</p>
            <p className="text-sm text-gray-500">+10 XP • 5 hours ago</p>
          </div>
        </div>
        
        {/* Activity 3 */}
        <div className="flex items-start">
          <div className="bg-purple-100 p-2 rounded-full mr-4">
            <i className="fas fa-trophy text-purple-500"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Achievement unlocked: "Bookworm"</p>
            <p className="text-sm text-gray-500">+50 XP • Yesterday</p>
          </div>
          <div className="ml-auto text-yellow-500">
            <i className="fas fa-coins"></i> 25
          </div>
        </div>
        
        {/* Activity 4 */}
        <div className="flex items-start">
          <div className="bg-red-100 p-2 rounded-full mr-4">
            <i className="fas fa-times-circle text-red-500"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Failed "No Social Media" challenge</p>
            <p className="text-sm text-gray-500">-15 XP • Yesterday</p>
          </div>
        </div>
        
        {/* Activity 5 */}
        <div className="flex items-start">
          <div className="bg-yellow-100 p-2 rounded-full mr-4">
            <i className="fas fa-coins text-yellow-500"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Received paycheck</p>
            <p className="text-sm text-gray-500">+100 XP • 2 days ago</p>
          </div>
          <div className="ml-auto text-yellow-500">
            <i className="fas fa-coins"></i> 50
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200">
        View All Activity
      </button>
    </section>
  );
} 