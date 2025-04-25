import './Stats.css';

export default function Stats() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Character Stats</h2>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="progress-ring" width="120" height="120">
              <circle
                stroke="#ef4444"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
              <circle
                className="progress-ring__circle"
                stroke="#ef4444"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${2 * Math.PI * 52 * (1 - 95/100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="mt-1 text-sm font-medium">95/100</span>
            </div>
          </div>
          <span className="mt-3 text-lg font-bold">Health</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="progress-ring" width="120" height="120">
              <circle
                stroke="#3b82f6"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
              <circle
                className="progress-ring__circle"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${2 * Math.PI * 52 * (1 - 65/100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3v18h-2v-18h2zm7.293 4.293-1.414 1.414 2.414 2.414-2.414 2.414 1.414 1.414 3.121-3.121c.391-.391.391-1.024 0-1.414l-3.121-3.121zm-14.586 0-3.121 3.121c-.391.391-.391 1.024 0 1.414l3.121 3.121 1.414-1.414-2.414-2.414 2.414-2.414-1.414-1.414z"/>
              </svg>
              <span className="mt-1 text-sm font-medium">65/100</span>
            </div>
          </div>
          <span className="mt-3 text-lg font-bold">Energy</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="progress-ring" width="120" height="120">
              <circle
                stroke="#a855f7"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
              <circle
                className="progress-ring__circle"
                stroke="#a855f7"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${2 * Math.PI * 52 * (1 - 78/100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="mt-1 text-sm font-medium">78/100</span>
            </div>
          </div>
          <span className="mt-3 text-lg font-bold">Intelligence</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="progress-ring" width="120" height="120">
              <circle
                stroke="#22c55e"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
              <circle
                className="progress-ring__circle"
                stroke="#22c55e"
                strokeWidth="8"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${2 * Math.PI * 52 * (1 - 72/100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span className="mt-1 text-sm font-medium">72/100</span>
            </div>
          </div>
          <span className="mt-3 text-lg font-bold">Social</span>
        </div>
      </div>
    </section>
  );
} 