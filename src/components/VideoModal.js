"use client";

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function VideoModal({ video, onClose }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!video) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#1a1a1d] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="relative aspect-video bg-black">
                    <video
                        ref={videoRef}
                        src={video.videoUrl}
                        className="w-full h-full"
                        controls
                        autoPlay
                    />
                </div>

                {/* Footer Info */}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-400">{video.category}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-sm text-gray-400">{video.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {video.description}
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}
