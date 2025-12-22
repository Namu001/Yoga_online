import { Home, Search, Heart, Settings, LogOut, Film, Tv, Compass } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search' },
    { icon: Compass, label: 'Explore' },
    { icon: Heart, label: 'Favorites' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-8 p-4 rounded-3xl glass-heavy w-20">
      <div className="flex flex-col gap-6 w-full items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 rounded-2xl transition-all duration-300 group relative ${item.active
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
          >
            <item.icon size={24} strokeWidth={item.active ? 2.5 : 2} />
            {item.active && (
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full opacity-0" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/10 w-full flex justify-center">
        <button className="p-3 text-gray-400 hover:text-red-400 transition-colors">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
}
