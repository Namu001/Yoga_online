"use client";

import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col h-screen bg-[#0f0f13] text-white overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-12 md:py-20 scrollbar-hide">
                <main className="mx-auto max-w-4xl min-h-full flex flex-col">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last Updated: 14-07-2025</p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <p className="text-gray-400 leading-relaxed">
                                This Privacy Policy describes how Alphamovil Digital Solution LLP ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you visit or make a purchase from the Site or use any of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-6 uppercase tracking-wider underline decoration-2 underline-offset-8">1. Information We Collect</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">a) Information You Provide Directly</h3>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                                        <li>Contact details: Name, phone number, email address, postal address</li>
                                        <li>Order details: Product purchase history, billing/shipping information</li>
                                        <li>Account information: Login credentials, preferences</li>
                                        <li>Customer support queries and feedback</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">b) Automatically Collected Information</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        IP address, browser type and version, device type and operating system, and navigation data. This is gathered using technologies like cookies and tracking tools to enhance your experience.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">c) Third-Party Sources</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We may receive information from payment gateways, analytics providers, and marketing platforms to process transactions and analyze usage patterns.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">2. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Process and fulfill orders</li>
                                <li>Communicate with you regarding issues or updates</li>
                                <li>Improve the functionality and user experience</li>
                                <li>Respond to inquiries and provide customer support</li>
                                <li>Send promotional emails and marketing offers (opt-out anytime)</li>
                                <li>Monitor and prevent fraudulent transactions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">3. How We Share Your Information</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Your information is shared only with service providers (payment processors, hosting), business partners (with consent), or legal authorities when required. <strong>We do not sell your personal information.</strong>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">4. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Cookies help us provide, protect, and improve our services. They enable functionalities like remembering your preferences and measuring user activity. You can manage cookies in your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">7. Children's Privacy</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Our Services are not intended for users under 16. We do not knowingly collect personal data from children.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">9. Your Rights</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                You have the right to access, update, or delete your data. To exercise these rights, please contact us at:
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <p className="text-[#00AEEF] font-bold">bd@alphamovil.com</p>
                                <p className="text-gray-500 text-sm mt-1">Alphamovil Digital Solution LLP, Gurgaon, Haryana, 122011</p>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
        </div>
    );
}
