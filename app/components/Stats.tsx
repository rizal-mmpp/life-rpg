export default function Stats() {
  return (
    <section className="mb-12 bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Character Stats</h2>
        <span className="text-sm text-gray-500">Level 5 Adventurer</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Health */}
        <div className="bg-red-50 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg className="w-16 h-16" viewBox="0 0 36 36">
              <path d="M18 36C8.06 36 0 27.94 0 18S8.06 0 18 0s18 8.06 18 18-8.06 18-18 18z" fill="#DD2E44"/>
              <path d="M18 30c-6.63 0-12-5.37-12-12S11.37 6 18 6s12 5.37 12 12-5.37 12-12 12zm0-21c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#EA596E"/>
              <path d="M18 24c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FFCC4D"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Health</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-red-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">85/100</p>
          </div>
        </div>

        {/* Energy */}
        <div className="bg-blue-50 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg className="w-16 h-16" viewBox="0 0 36 36">
              <path d="M18 36C8.06 36 0 27.94 0 18S8.06 0 18 0s18 8.06 18 18-8.06 18-18 18z" fill="#3B88C3"/>
              <path d="M18 30c-6.63 0-12-5.37-12-12S11.37 6 18 6s12 5.37 12 12-5.37 12-12 12zm0-21c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#88C9F9"/>
              <path d="M18 24c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FFCC4D"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Energy</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '65%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">65/100</p>
          </div>
        </div>

        {/* Intelligence */}
        <div className="bg-purple-50 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg className="w-16 h-16" viewBox="0 0 36 36">
              <path d="M18 36C8.06 36 0 27.94 0 18S8.06 0 18 0s18 8.06 18 18-8.06 18-18 18z" fill="#9266CC"/>
              <path d="M18 30c-6.63 0-12-5.37-12-12S11.37 6 18 6s12 5.37 12 12-5.37 12-12 12zm0-21c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#AA8DD8"/>
              <path d="M18 24c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FFCC4D"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Intelligence</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{width: '78%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">78/100</p>
          </div>
        </div>

        {/* Social */}
        <div className="bg-green-50 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg className="w-16 h-16" viewBox="0 0 36 36">
              <path d="M18 36C8.06 36 0 27.94 0 18S8.06 0 18 0s18 8.06 18 18-8.06 18-18 18z" fill="#77B255"/>
              <path d="M18 30c-6.63 0-12-5.37-12-12S11.37 6 18 6s12 5.37 12 12-5.37 12-12 12zm0-21c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#A6D388"/>
              <path d="M18 24c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FFCC4D"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Social</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '72%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">72/100</p>
          </div>
        </div>
      </div>
    </section>
  );
} 