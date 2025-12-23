"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

export default function DesirableEpisodeSection({ items, onMovieClick }) {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 px-4 md:py-12 md:px-8 rounded-[20px] md:rounded-[40px] transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">Desirable Episodes</h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Explore the inner journey through these carefully selected powerful episodes.
                    </p>
                </div>

                <div className="hidden md:flex gap-3">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white backdrop-blur-md"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white backdrop-blur-md"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="w-full grid grid-cols-1 md:flex gap-4 md:gap-6 md:overflow-x-auto pb-4 md:pb-8 pt-2 scrollbar-hide md:scroll-smooth"
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full md:w-auto md:shrink-0">
                        <MovieCard {...item} onClick={() => onMovieClick && onMovieClick(item)} variant="landscape" />
                    </div>
                ))}
            </div>
        </div>
    );
}
