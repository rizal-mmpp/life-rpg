interface CategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: {
    bg: string;
    icon: string;
    button: string;
    hover: string;
  };
  content: {
    type: 'finance' | 'tasks' | 'relationships';
    data: any;
  };
}

const categoryData: CategoryData[] = [
  {
    id: 'finances',
    title: 'Finances',
    description: 'Build your wealth wisely',
    icon: 'fas fa-coins',
    color: {
      bg: 'bg-yellow-100',
      icon: 'bg-yellow-500',
      button: 'bg-yellow-400',
      hover: 'hover:bg-yellow-500'
    },
    content: {
      type: 'finance',
      data: {
        balance: 1400000,
        monthlyGoal: 10000000,
        income: 3800000,
        expenses: 1750000
      }
    }
  },
  {
    id: 'tasks',
    title: 'Tasks & Quests',
    description: 'Level up with daily challenges',
    icon: 'fas fa-tasks',
    color: {
      bg: 'bg-blue-100',
      icon: 'bg-blue-500',
      button: 'bg-blue-400',
      hover: 'hover:bg-blue-500'
    },
    content: {
      type: 'tasks',
      data: {
        completed: 3,
        total: 5,
        tasks: [
          { id: 1, text: 'Morning workout', completed: true },
          { id: 2, text: 'Read 30 minutes', completed: true },
          { id: 3, text: 'Work project (2h)', completed: true },
          { id: 4, text: 'Call family member', completed: false },
          { id: 5, text: 'Learn new skill', completed: false }
        ]
      }
    }
  },
  {
    id: 'relationships',
    title: 'Relationships',
    description: 'Connect with your loved ones',
    icon: 'fas fa-users',
    color: {
      bg: 'bg-pink-100',
      icon: 'bg-pink-500',
      button: 'bg-pink-400',
      hover: 'hover:bg-pink-500'
    },
    content: {
      type: 'relationships',
      data: {
        xp: {
          current: 720,
          max: 1000
        },
        relationships: [
          { type: 'Family', icon: 'fas fa-user', progress: 85 },
          { type: 'Friends', icon: 'fas fa-user-friends', progress: 65 },
          { type: 'Work', icon: 'fas fa-briefcase', progress: 75 }
        ]
      }
    }
  }
];

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const FinanceContent = ({ data }: { data: any }) => (
  <>
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Current Balance</span>
        <span className="font-semibold">Rp {formatNumber(data.balance)}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-yellow-400 h-2 rounded-full" 
          style={{width: `${(data.balance / data.monthlyGoal) * 100}%`}}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Monthly Goal: Rp {formatNumber(data.monthlyGoal)}</span>
        <span>{Math.round((data.balance / data.monthlyGoal) * 100)}%</span>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-blue-50 p-2 rounded-lg text-center">
        <p className="text-xs text-gray-500">Income</p>
        <p className="font-semibold text-blue-600">Rp {formatNumber(data.income)}</p>
      </div>
      <div className="bg-red-50 p-2 rounded-lg text-center">
        <p className="text-xs text-gray-500">Expenses</p>
        <p className="font-semibold text-red-600">Rp {formatNumber(data.expenses)}</p>
      </div>
    </div>
  </>
);

const TasksContent = ({ data }: { data: any }) => (
  <>
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Daily Quests</span>
        <span className="font-semibold">{data.completed}/{data.total} Completed</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-400 h-2 rounded-full" 
          style={{width: `${(data.completed / data.total) * 100}%`}}
        ></div>
      </div>
    </div>
    
    <div className="space-y-2 mb-4">
      {data.tasks.map((task: any) => (
        <div key={task.id} className="flex items-center">
          <input
            type="checkbox"
            id={`task${task.id}`}
            className="rounded text-blue-500 mr-2"
            defaultChecked={task.completed}
          />
          <label
            htmlFor={`task${task.id}`}
            className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            {task.text}
          </label>
        </div>
      ))}
    </div>
  </>
);

const RelationshipsContent = ({ data }: { data: any }) => (
  <>
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Social XP</span>
        <span className="font-semibold">{data.xp.current}/{data.xp.max}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-pink-400 h-2 rounded-full" 
          style={{width: `${(data.xp.current / data.xp.max) * 100}%`}}
        ></div>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-2 mb-4">
      {data.relationships.map((rel: any, index: number) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-1">
            <i className={`${rel.icon} text-gray-500`}></i>
          </div>
          <p className="text-xs">{rel.type}</p>
          <p className="text-xs font-semibold">{rel.progress}%</p>
        </div>
      ))}
    </div>
  </>
);

const Category = ({ data }: { data: CategoryData }) => {
  const renderContent = () => {
    switch (data.content.type) {
      case 'finance':
        return <FinanceContent data={data.content.data} />;
      case 'tasks':
        return <TasksContent data={data.content.data} />;
      case 'relationships':
        return <RelationshipsContent data={data.content.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`flex items-center gap-3 ${data.color.bg} p-4`}>
        <div className={`${data.color.icon} p-2 rounded-lg`}>
          <i className={`${data.icon} text-white text-xl`}></i>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">{data.title}</h3>
          <p className="text-sm text-gray-600">{data.description}</p>
        </div>
      </div>
      
      <div className="p-4">
        {renderContent()}
        <button className={`w-full ${data.color.button} ${data.color.hover} text-white font-medium py-2 px-4 rounded-lg transition duration-200`}>
          {data.content.type === 'finance' ? 'View Details' :
           data.content.type === 'tasks' ? 'Add New Quest' : 'Connect Now'}
        </button>
      </div>
    </div>
  );
};

export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Life Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map(category => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </section>
  );
}
