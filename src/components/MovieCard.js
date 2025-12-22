import { Play, MoreHorizontal } from 'lucide-react';

export default function MovieCard({ title, image, category, duration, onClick, size = 'normal', fluid = false }) {
    const fixedDimensions = size === 'small' ? 'w-[160px] h-[220px]' : 'w-[200px] h-[280px]';
    const dimensions = fluid ? 'w-full aspect-[5/7]' : 'w-full aspect-[5/7] md:w-[200px] md:h-[280px]';
    const smallDimensions = 'w-full aspect-[5/7] md:w-[160px] md:h-[220px]';
    const finalDimensions = size === 'small' ? smallDimensions : dimensions;


    return (
        <div onClick={onClick} className={`relative ${finalDimensions} rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0`}>
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                <button className="glass p-2 rounded-full hover:bg-white/20">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`font-bold ${size === 'small' ? 'text-base' : 'text-lg'} mb-1 leading-tight`}>{title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex gap-2">
                        <span>{category}</span>
                        <span>•</span>
                        <span>{duration}</span>
                    </div>
                    <button className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <Play fill="currentColor" size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
}
