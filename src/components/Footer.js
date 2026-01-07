import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1d] text-gray-400 py-4 px-4 md:py-6 md:px-8 border-t border-white/5 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2024 Stream Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}