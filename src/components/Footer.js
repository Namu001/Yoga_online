"use client";

import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1d] text-gray-400 py-8 px-4 md:py-16 md:px-8 mt-10 md:mt-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

             

          

               

             
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2024 Stream Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
                </div>
            </div>
        </footer>
    );
}
