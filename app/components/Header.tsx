import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <i className="fas fa-gamepad text-3xl"></i>
            <h1 className="text-2xl font-bold">Life RPG</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-full">
              <i className="fas fa-coins text-yellow-400"></i>
              <span id="points-counter" className="font-bold">1,250</span>
            </div>
            <div className="relative">
              <Image 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Avatar" 
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-4 h-4 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 