"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MostSensationalSection({ title, description, items, onMovieClick }) {
    const scrollRef = useRef(null);
    const leftSideItems = items.slice(0, 3); // Small vertical cards
    const rightSideItems = items.slice(3); // Large horizontal cards

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-6">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{title}</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                    {description || "Your personalized selection of premium content"}
                </p>
            </div>

            {/* Two-Column Layout */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column: Continue Watching - Small Vertical Cards */}
                <div className="w-full md:w-[280px] shrink-0">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">

                        <div className="flex flex-col gap-3">
                            {leftSideItems.map((item, index) => (
                                <div
                                    key={`left-${index}`}
                                    onClick={() => onMovieClick && onMovieClick(item)}
                                    className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Small Thumbnail */}
                                    <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden shrink-0 bg-gray-800">
                                        <img
                                            src={item.thumbnail || item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-white truncate mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 truncate">
                                            {item.subtitle || `Season ${item.season || 1}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Featured Content - Large Horizontal Cards */}
                <div className="flex-1 min-w-0 relative group/nav">
                    {/* Navigation Buttons - Overlaid on sides */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-all text-white backdrop-blur-md active:scale-90 opacity-0 group-hover/nav:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-all text-white backdrop-blur-md active:scale-90 opacity-0 group-hover/nav:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Scrollable Container with Hidden Scrollbar */}
                    <div
                        ref={scrollRef}
                        className="grid grid-cols-2 md:flex gap-4 md:overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                        style={{
                            msOverflowStyle: 'none',  /* IE and Edge */
                            scrollbarWidth: 'none'   /* Firefox */
                        }}
                    >
                        {rightSideItems.map((item, index) => (
                            <div
                                key={`right-${index}`}
                                className="w-full md:w-auto md:shrink-0 group cursor-pointer"
                                onClick={() => onMovieClick && onMovieClick(item)}
                            >
                                <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[2/3] md:h-[340px] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                    {/* Poster Image */}
                                    <img
                                        src={item.thumbnail || item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    {/* Content Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                        <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] md:text-sm text-gray-300 line-clamp-1 md:line-clamp-2 mb-2 md:mb-3">
                                            {item.description || item.subtitle}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-400">
                                            {item.year && <span>{item.year}</span>}
                                            {item.rating && (
                                                <>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        ⭐ {item.rating}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Play Button - Center */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4 md:w-6 md:h-6 text-black ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Quality Badge - Top Right */}
                                    <div className="absolute top-3 right-3">
                                        <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20">
                                            <span className="text-xs font-bold text-white">HD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Spacer to ensure last card is fully visible */}
                        <div className="hidden md:block shrink-0 w-40 h-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
