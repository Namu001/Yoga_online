"use client";

import React from 'react';

export default function TermsPage() {
    return (
        <div className="flex flex-col h-screen bg-[#0f0f13] text-white overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-12 md:py-20 scrollbar-hide">
                <main className="mx-auto max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight">Terms and Conditions</h1>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">Consent</h2>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">Information we collect</h2>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">How we use your information</h2>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                                We use the information we collect in various ways, including to:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you for customer service, updates, and marketing</li>
                                <li>Send you emails and prevent fraud</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">GDPR Data Protection Rights</h2>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
                                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
                                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-[#00AEEF] mb-4 uppercase tracking-wider">Children’s Information</h2>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. We do not knowingly collect any Personal Identifiable Information from children under the age of 13.
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
