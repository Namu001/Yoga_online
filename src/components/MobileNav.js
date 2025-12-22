import { Home, Search, Heart, Settings, Compass } from 'lucide-react';

export default function MobileNav() {
    const navItems = [
        { icon: Home, label: 'Home', active: true },
        { icon: Search, label: 'Search' },
        { icon: Compass, label: 'Explore' },
        { icon: Heart, label: 'Favorites' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f0f13]/90 backdrop-blur-lg border-t border-white/10 md:hidden pb-safe">
            <div className="flex justify-around items-center p-4">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center gap-1 transition-colors ${item.active ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        <item.icon size={24} strokeWidth={item.active ? 2.5 : 2} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
