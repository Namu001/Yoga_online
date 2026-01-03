"use client";

import { useState, useEffect } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginModal({ isOpen, onClose }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.length === 10) {
            alert(`Contact number submitted: ${phoneNumber}`);
            onClose();
        }
    };

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                className={`relative w-full max-w-md p-8 bg-[#1a1a20]/90 border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl">
                        <Phone className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Enter your contact number to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <span className="text-sm font-medium">+91</span>
                        </div>
                        <input
                            type="tel"
                            required
                            placeholder="Mobile Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            className="w-full pl-14 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-medium text-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group transition-all"
                    >
                        Continue
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    By continuing, you agree to our <Link href="/terms" className="text-purple-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-purple-400 hover:underline">Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}
