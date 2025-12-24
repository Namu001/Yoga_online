"use client";

import React from 'react';

export default function CookiePolicyPage() {
    return (
        <div className="flex flex-col h-screen bg-[#0f0f13] text-white overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-12 md:py-20 scrollbar-hide">
                <main className="mx-auto max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight">Cookie Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-6 uppercase tracking-wider underline decoration-2 underline-offset-8">1. What Are Cookies?</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">2. How We Use Cookies</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>To make our website work as you'd expect</li>
                                <li>Remember your settings during and between visits</li>
                                <li>Improve the speed/security of the site</li>
                                <li>Allow you to share pages with social networks like Facebook</li>
                                <li>Continuously improve our website for you</li>
                                <li>Make our marketing more efficient</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">3. Types of Cookies We Use</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">a) Essential Cookies</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        These are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">b) Performance & Analytics Cookies</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">c) Functional Cookies</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">4. Managing Cookies</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                You can usually switch cookies off by adjusting your browser settings to stop it from accepting cookies. Doing so, however, will likely limit the functionality of our and a large proportion of the world's websites as cookies are a standard part of most modern websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">5. Contact Us</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                If you have any questions about our use of cookies, please contact us at:
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <p className="text-[#00AEEF] font-bold">bd@alphamovil.com</p>
                                <p className="text-gray-500 text-sm mt-1">Alphamovil Digital Solution LLP, Gurgaon, Haryana</p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
