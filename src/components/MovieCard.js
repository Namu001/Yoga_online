import { Play, MoreHorizontal } from 'lucide-react';

export default function MovieCard({ title, image, category, duration, onClick, size = 'normal', fluid = false, variant = 'portrait' }) {
    const isLandscape = variant === 'landscape';

    // Default portrait dimensions
    const portraitDimensions = fluid ? 'w-full aspect-[5/7]' : 'w-full aspect-[5/7] md:w-[200px] md:h-[280px]';
    const smallPortraitDimensions = 'w-full aspect-[5/7] md:w-[160px] md:h-[220px]';

    // Landscape dimensions (16:9)
    const landscapeDimensions = fluid ? 'w-full aspect-video' : 'w-full aspect-video md:w-[320px]';

    let finalDimensions = size === 'small' ? smallPortraitDimensions : portraitDimensions;

    if (isLandscape) {
        finalDimensions = landscapeDimensions;
    }

    return (
        <div onClick={onClick} className={`relative ${finalDimensions} rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 bg-[#1a1a1e]`}>
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

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`font-bold ${size === 'small' ? 'text-sm' : 'text-base md:text-lg'} mb-1 leading-tight line-clamp-1`}>{title}</h3>
                <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-400">
                    <div className="flex gap-2">
                        {category && <span>{category}</span>}
                        {category && duration && <span>•</span>}
                        <span>{duration}</span>
                    </div>
                    <button className="bg-[#00AEEF] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,174,239,0.5)]">
                        <Play fill="currentColor" size={12} className="translate-x-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
