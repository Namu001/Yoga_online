"use client";

import { useState } from 'react';
import { Play } from 'lucide-react';

function ThumbnailCard({ title, image, duration, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1e] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,174,239,0.15)] hover:-translate-y-1"
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00AEEF] text-white shadow-[0_0_30px_rgba(0,174,239,0.5)] transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <Play fill="currentColor" size={28} className="translate-x-0.5" />
                    </div>
                </div>

                <div className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md border border-white/10">
                    {duration}
                </div>
            </div>

            <div className="p-4 bg-gradient-to-b from-transparent to-[#1a1a1e]/50">
                <h3 className="line-clamp-1 text-sm md:text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default function CapturedMomentsSection({ data, onMovieClick }) {
    const [activeSeason, setActiveSeason] = useState(data.seasons[0].id);

    const currentSeason = data.seasons.find(s => s.id === activeSeason);

    return (
        <section className="relative w-full py-16 md:py-32 overflow-hidden bg-[#0f0f13]">

            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105 blur-[80px] opacity-20"
                    style={{ backgroundImage: `url(${data.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f0f13_80%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f13] via-transparent to-[#0f0f13]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center">
                    {/* Header Section */}
                    <div className="mb-16 md:mb-24 text-center max-w-4xl">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-[1px] w-8 bg-[#00AEEF]/60" />
                            <span className="text-[#00AEEF] text-xs md:text-sm font-black tracking-[0.4em] uppercase">
                                Exclusive Moments
                            </span>
                            <div className="h-[1px] w-8 bg-[#00AEEF]/60" />
                        </div>
                        <h2 className="text-white text-4xl md:text-7xl font-black leading-tight mb-8 tracking-tight">
                            {data.title}
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent rounded-full opacity-50" />
                        </div>
                    </div>

                    <div className="flex items-center bg-white/[0.03] border border-white/10 p-1.5 rounded-full mb-16 md:mb-20 backdrop-blur-md shadow-2xl">
                        {data.seasons.map((season) => (
                            <button
                                key={season.id}
                                onClick={() => setActiveSeason(season.id)}
                                className={`px-8 md:px-12 py-3.5 rounded-full text-sm md:text-lg font-bold transition-all duration-500 relative ${activeSeason === season.id
                                    ? "text-white"
                                    : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {activeSeason === season.id && (
                                    <div className="absolute inset-0 bg-[#00AEEF] rounded-full shadow-[0_0_25px_rgba(0,174,239,0.5)] z-0" />
                                )}
                                <span className="relative z-10">{season.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {currentSeason.episodes.map((episode, index) => (
                            <div
                                key={index}
                                className="transition-all duration-700 ease-out"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: 'fadeInUp 0.8s ease-out forwards'
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

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
