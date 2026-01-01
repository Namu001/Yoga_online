import { Play, MoreHorizontal } from 'lucide-react';

export default function MovieCard({ title, image, category, duration, year, rating, onClick, size = 'normal', fluid = false, variant = 'portrait' }) {
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
        <div className={`group cursor-pointer ${fluid ? 'w-full' : 'flex-shrink-0'}`}>
            <div onClick={onClick} className={`relative ${finalDimensions} rounded-2xl overflow-hidden bg-[#1a1a1e] transform group-hover:scale-[1.02] transition-all duration-300 shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,174,239,0.15)]`}>
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <button className="glass p-2 rounded-full hover:bg-white/20">
                        <MoreHorizontal size={16} />
                    </button>
                </div>

                {/* Play Button - Bottom Right of Image */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#00AEEF] text-white p-2 md:p-2.5 rounded-full shadow-[0_0_15px_rgba(0,174,239,0.5)] hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={size === 'small' ? 12 : 16} className="translate-x-0.5" />
                    </div>
                </div>
            </div>

            {/* Info Below Card */}
            <div className="mt-3 md:mt-4 px-1">
                <h3 className={`font-bold text-white line-clamp-1 mb-1 group-hover:text-[#00AEEF] transition-colors duration-300 ${size === 'small' ? 'text-xs' : 'text-sm md:text-base'}`}>
                    {title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] md:text-xs text-gray-400">
                    {category && <span className="text-[#00AEEF]/80">{category}</span>}
                    {category && (duration || year || rating) && <span className="opacity-30">•</span>}
                    {duration && <span>{duration}</span>}
                    {(duration || category) && year && <span className="opacity-30">•</span>}
                    {year && <span>{year}</span>}
                    {rating && (
                        <>
                            <span className="opacity-30">•</span>
                            <span className="flex items-center gap-1 text-yellow-500/80">
                                ★ {rating}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
