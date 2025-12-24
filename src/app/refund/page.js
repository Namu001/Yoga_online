"use client";

import React from 'react';

export default function RefundPage() {
    return (
        <div className="flex flex-col h-screen bg-[#0f0f13] text-white overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-12 md:py-20 scrollbar-hide">
                <main className="mx-auto max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight">Refund Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">1. Cancellation Policy</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Subscribers may cancel their recurring subscription at any time. Upon cancellation, your account will remain active until the end of your current billing cycle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">2. Refund Eligibility</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                To be eligible for a refund, you must submit a request within **2 days** of your subscription start date. Refunds are granted at the sole discretion of Alphamovil.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Refund requests may be considered if you encounter persistent technical issues that prevent you from using the service despite multiple support attempts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">3. Process for Requesting a Refund</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Please contact our customer support team with your account info and a brief explanation of the issue:
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <p className="text-[#00AEEF] font-bold">bd@alphamovil.com</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">4. Refund Processing</h2>
                            <p className="text-gray-400 leading-relaxed">
                                If approved, your refund will be processed and applied to your original payment method within **7 working days**.
                            </p>
                        </section>

                        <section className="bg-red-900/10 p-8 rounded-3xl border border-red-500/20">
                            <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wider">Scenarios Where Refunds Are Typically Granted:</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-3">
                                <li><strong>Technical Issues:</strong> Persistent software failures that impede usage.</li>
                                <li><strong>Billing Errors:</strong> Incorrect charges (e.g., billed twice in one month).</li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
