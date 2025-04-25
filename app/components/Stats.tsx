import './Stats.css';

interface StatCircleProps {
  value: number;
  maxValue: number;
  color: string;
  icon: React.ReactNode;
  label: string;
}

function StatCircle({ value, maxValue, color, icon, label }: StatCircleProps) {
  const percentage = Math.round((value / maxValue) * 100);
  
  // Mobile size (60% of original)
  const mobileRadius = 31; // 60% of 52
  const mobileCircumference = 2 * Math.PI * mobileRadius;
  const mobileStrokeDashoffset = mobileCircumference * (1 - percentage / 100);
  
  // Desktop size (original)
  const desktopRadius = 52;
  const desktopCircumference = 2 * Math.PI * desktopRadius;
  const desktopStrokeDashoffset = desktopCircumference * (1 - percentage / 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Mobile SVG - 60% of original size */}
        <svg className="progress-ring md:hidden" width="72" height="72">
          <circle
            stroke={color}
            strokeWidth="5"
            fill="transparent"
            r={mobileRadius}
            cx="36"
            cy="36"
          />
          <circle
            className="progress-ring__circle"
            stroke={color}
            strokeWidth="5"
            fill="transparent"
            r={mobileRadius}
            cx="36"
            cy="36"
            style={{
              strokeDasharray: `${mobileCircumference}`,
              strokeDashoffset: `${mobileStrokeDashoffset}`,
            }}
          />
        </svg>
        
        {/* Desktop SVG - original size */}
        <svg className="progress-ring hidden md:block" width="120" height="120">
          <circle
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            r={desktopRadius}
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring__circle"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            r={desktopRadius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: `${desktopCircumference}`,
              strokeDashoffset: `${desktopStrokeDashoffset}`,
            }}
          />
        </svg>

        {/* Mobile Icon Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:hidden">
          <div className="text-lg">{icon}</div>
          <span className="text-xs font-medium">{percentage}%</span>
        </div>

        {/* Desktop Icon Container */}
        <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center">
          <div className="text-2xl">{icon}</div>
          <span className="mt-1 font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="mt-1.5 text-sm font-bold md:mt-3 md:text-xl">{label}</span>
    </div>
  );
}

const statsData = [
  {
    value: 95,
    maxValue: 100,
    color: "#ef4444",
    icon: "fas fa-heart",
    label: "Health"
  },
  {
    value: 65,
    maxValue: 100,
    color: "#3b82f6",
    icon: "fas fa-wallet",
    label: "Budget"
  },
  {
    value: 78,
    maxValue: 100,
    color: "#a855f7",
    icon: "fas fa-lightbulb",
    label: "Intelligence"
  },
  {
    value: 72,
    maxValue: 100,
    color: "#22c55e",
    icon: "fas fa-users",
    label: "Social"
  }
];

export default function Stats() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Character Stats</h2>
      <div className="flex justify-between items-center">
        {statsData.map((stat, index) => (
          <StatCircle
            key={index}
            value={stat.value}
            maxValue={stat.maxValue}
            color={stat.color}
            icon={
              <i className={`${stat.icon} text-2xl ${
                stat.label === 'Health' ? 'text-red-500' :
                stat.label === 'Budget' ? 'text-blue-500' :
                stat.label === 'Intelligence' ? 'text-purple-500' :
                'text-green-500'
              }`}></i>
            }
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
} 