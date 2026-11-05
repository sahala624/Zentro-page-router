
import React from 'react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">

            <div className="mx-auto max-w-6xl">

                {/* Page heading */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-[#232f3e]">
                        Contact Us
                    </h1>

                    <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-sky-500"></div>

                    <p className="mt-4 text-gray-600">
                        We'd love to hear from you. Get in touch with us!
                    </p>
                </div>

                {/* Contact section */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* Contact information */}
                    <div className="rounded-xl bg-[#232f3e] p-8 text-white shadow-lg">

                        <h2 className="mb-6 text-2xl font-bold">
                            Get in Touch
                        </h2>

                        <p className="mb-8 text-gray-300">
                            Have questions about our products or your order?
                            Our team is happy to help you.
                        </p>
                        <hr/>

                        <div className="space-y-7">

                            <div>
                                <h3 className="font-semibold text-sky-400">
                                    Address
                                </h3>
                                <p className="mt-1 text-gray-200">
                                    Chennai, India
                                </p>

                                <hr/>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sky-400">
                                    Email
                                </h3>
                                <p className="mt-1 text-gray-200">
                                    support@shopease.com
                                </p>

                                <hr/>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sky-400">
                                    Phone
                                </h3>
                                <p className="mt-1 text-gray-200">
                                    +91 98765 43210
                                </p>

                                <hr/>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sky-400">
                                    Working Hours
                                </h3>
                                <p className="mt-1 text-gray-200">
                                    Monday - Saturday
                                </p>
                                <p className="text-gray-200">
                                    9:00 AM - 6:00 PM
                                </p>
                                <hr/>
                            </div>
                            <div></div>


                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="rounded-xl bg-white p-8 shadow-lg">

                        <h2 className="mb-6 text-2xl font-bold text-[#232f3e]">
                            Send Us a Message
                        </h2>

                        <form className="space-y-5">

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-sky-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-sky-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-sky-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-sky-500"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full rounded-lg bg-sky-500 py-3 font-semibold text-white shadow-md transition hover:bg-sky-600"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
