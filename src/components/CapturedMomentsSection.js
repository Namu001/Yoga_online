"use client";

import { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

function ThumbnailCard({ title, image, duration, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1e] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,174,239,0.15)] hover:-translate-y-1 w-full lg:w-[320px] lg:shrink-0"
        >
            <div className="aspect-video w-full overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                {/* Play Button - Emerges on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00AEEF] text-white shadow-[0_0_30px_rgba(0,174,239,0.5)] transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <Play fill="currentColor" size={24} className="translate-x-0.5" />
                    </div>
                </div>

                <div className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md border border-white/10">
                    {duration}
                </div>
            </div>

            <div className="p-3 md:p-4 bg-gradient-to-b from-transparent to-[#1a1a1e]/50">
                <h3 className="line-clamp-1 text-sm md:text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default function CapturedMomentsSection({ data, onMovieClick }) {
    const [activeSeason, setActiveSeason] = useState(data.seasons[0].id);
    const scrollRef = useRef(null);

    const currentSeason = data.seasons.find(s => s.id === activeSeason);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full py-12 md:py-20 overflow-hidden bg-[#0f0f13]">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105 blur-[60px] opacity-10"
                    style={{ backgroundImage: `url(${data.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f13] via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start focus-within:z-20">

                    {/* LEFT CONTENT: Title & Navigation */}
                    <div className="lg:w-[320px] shrink-0 pt-4 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-[1px] w-6 bg-[#00AEEF]/60" />
                            <span className="text-[#00AEEF] text-[10px] md:text-sm font-black tracking-[0.3em] uppercase">
                                Collection
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-8 tracking-tight uppercase">
                            Captured <br className="hidden lg:block" /> Moments
                        </h2>

                        {/* Season Navigation */}
                        <div className="flex lg:flex-col gap-3 mb-10 overflow-x-auto lg:overflow-visible scrollbar-hide pb-2 lg:pb-0 justify-center lg:justify-start">
                            {data.seasons.map((season) => (
                                <button
                                    key={season.id}
                                    onClick={() => setActiveSeason(season.id)}
                                    className={`px-6 py-3 rounded-2xl text-sm md:text-base font-bold transition-all duration-500 relative whitespace-nowrap min-w-[120px] lg:min-w-0 ${activeSeason === season.id
                                        ? "text-white"
                                        : "text-gray-500 hover:text-white bg-white/5 border border-white/5"
                                        }`}
                                >
                                    {activeSeason === season.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#00AEEF]/80 rounded-2xl shadow-[0_0_20px_rgba(0,174,239,0.3)] z-0" />
                                    )}
                                    <span className="relative z-10">{season.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Navigation Arrows for Scroller (Desktop only) */}
                        <div className="hidden lg:flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all duration-300 shadow-xl"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all duration-300 shadow-xl"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: Cards Container (Grid on Mobile, Scroller on Desktop) */}
                    <div className="w-full lg:flex-1 min-w-0 relative">
                        <div
                            ref={scrollRef}
                            className="grid grid-cols-2 lg:flex gap-4 md:gap-6 lg:gap-8 lg:overflow-x-auto scrollbar-hide lg:scroll-smooth pb-8"
                        >
                            {currentSeason.episodes.map((episode, index) => (
                                <div
                                    key={`${activeSeason}-${index}`}
                                    className="animate-fadeInLeft"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: 'fadeInLeft 0.6s ease-out forwards'
                                    }}
                                >
                                    <ThumbnailCard
                                        {...episode}
                                        onClick={() => onMovieClick && onMovieClick(episode)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
}
