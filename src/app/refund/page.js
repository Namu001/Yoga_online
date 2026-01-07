"use client";

import React from 'react';

export default function RefundPage() {
    return (
        <div className="flex flex-col h-screen bg-[#0f0f13] text-white overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-12 md:py-20 scrollbar-hide">
                <main className="mx-auto max-w-4xl min-h-full flex flex-col">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight">Refund Policy</h1>
                    <p className="text-gray-500 mb-8">Last Updated: 09-07-2025</p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <p className="text-gray-400 leading-relaxed">
                                Thank you for subscribing to Alphamovil's services. We hope you are satisfied with our services, but if not, we're here to help.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">1. Free Trial</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Alphamovil offers no free trial for new users to experience the services before purchasing a subscription. During the trial period, users can cancel their subscription at any time without being charged.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">2. Cancellation Policy</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Subscribers may cancel their recurring subscription at any time. Upon cancellation, your account will remain active until the end of your current billing cycle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">3. Refund Eligibility</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                To be eligible for a refund, you must submit a request within 2 days of your subscription start date. Refunds may be considered on a case-by-case basis and are granted at the sole discretion of Alphamovil.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Refund requests can be made if you encounter technical issues that prevent you from using our service and that cannot be resolved by our support team. Proof of the issue may be required.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">4. Process for Requesting a Refund</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                To request a refund, please contact our customer support team at <strong>bd@alphamovil.com</strong>. Include your account information, subscription details, and a brief explanation of why you are requesting a refund.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">5. Refund Processing</h2>
                            <p className="text-gray-400 leading-relaxed">
                                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a 7 working days. Please note that refunds can only be made back to the original payment method used at the time of purchase.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-6 mt-12">
                            <section className="bg-green-900/10 p-8 rounded-3xl border border-green-500/20">
                                <h3 className="text-lg font-bold text-green-500 mb-4 uppercase tracking-wider">Refunds Typically Granted:</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-3 text-sm">
                                    <li><strong>Technical Issues:</strong> Persistent failures after multiple support attempts.</li>
                                    <li><strong>Billing Errors:</strong> Incorrect charges or double billing.</li>
                                </ul>
                            </section>

                            <section className="bg-red-900/10 p-8 rounded-3xl border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider">Refunds Not Typically Granted:</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-3 text-sm">
                                    <li><strong>Change of Mind:</strong> Deciding you no longer want the service after the period.</li>
                                    <li><strong>Personal Circumstances:</strong> Changes in business or personal life.</li>
                                </ul>
                            </section>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}
