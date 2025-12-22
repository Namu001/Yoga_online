"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

export default function HeroSection({ videos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    if (!videos || videos.length === 0) return null;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [videos.length]);

    // Restart video on slide change
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [currentIndex]);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <div className="relative w-full h-[50vh] md:h-[85vh] min-h-[400px] md:min-h-[600px] rounded-[20px] md:rounded-[40px] overflow-hidden">

            <div className="absolute inset-0 bg-black">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {index === currentIndex && (
                            <video
                                ref={videoRef}
                                src={video.videoUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center gap-2 md:gap-4 z-30">
                <div className="flex gap-2">
                    <button
                        onClick={() =>
                            setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
                        }
                        className="glass p-2 md:p-3 rounded-full hover:bg-white/20 text-white transition-all hover:scale-110"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={() =>
                            setCurrentIndex((prev) => (prev + 1) % videos.length)
                        }
                        className="glass p-2 md:p-3 rounded-full hover:bg-white/20 text-white transition-all hover:scale-110"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>

                <div className="w-px h-6 md:h-8 bg-white/20 mx-1 md:mx-2"></div>

                <button
                    onClick={toggleMute}
                    className="glass p-2 md:p-3 rounded-full hover:bg-white/20 text-white transition-all hover:scale-110"
                >
                    {isMuted ? <VolumeX size={20} className="md:w-6 md:h-6" /> : <Volume2 size={20} className="md:w-6 md:h-6" />}
                </button>
            </div>

            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "w-6 md:w-8 bg-white"
                            : "w-1.5 md:w-2 bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
