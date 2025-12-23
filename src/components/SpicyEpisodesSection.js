"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

export default function SpicyEpisodesSection({ items, onMovieClick }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start focus-within:z-20">

                {/* LEFT CONTENT: Horizontal Scroller */}
                <div className="w-full lg:flex-1 min-w-0 relative order-2 lg:order-1">
                    <div className="absolute top-0 left-0 z-20 px-2 py-1">
                        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-wider">Today</span>
                    </div>
                    <div
                        ref={scrollRef}
                        className="grid grid-cols-1 lg:flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide lg:scroll-smooth pb-4 pt-8"
                    >
                        {items.map((item, index) => (
                            <div key={index} className="w-full lg:w-[320px] lg:shrink-0">
                                <MovieCard
                                    {...item}
                                    onClick={() => onMovieClick && onMovieClick(item)}
                                    variant="landscape"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT: Title & Navigation */}
                <div className="lg:w-[400px] shrink-0 pt-4 text-center lg:text-right order-1 lg:order-2">
                    <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tight uppercase">
                        Spicy & Erotic <br className="hidden lg:block" /> Short Episodes <br className="hidden lg:block" /> Watch Now
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="hidden lg:flex justify-center lg:justify-end gap-3">
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
            </div>
        </section>
    );
}
