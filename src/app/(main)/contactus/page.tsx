'use client'
import React, { useState } from 'react'

function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', form)
        // send to backend here
    }

    return (
        <div className="min-h-screen  px-5 py-16 md:px-20 text-dark-blue dark:text-white">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Got a question or feedback? We’d love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="bg-[#F9FAFB] dark:bg-[#2B2B2B] p-8 rounded-3xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Our Contact Info</h3>
                    <ul className="space-y-6">
                        <li>
                            <span className="font-semibold">📍 Address:</span>  
                            <p className="ml-6 mt-1 text-dark dark:text-gray-300">123 Main Street, Tehran, Iran</p>
                        </li>
                        <li>
                            <span className="font-semibold">📞 Phone:</span>
                            <p className="ml-6 mt-1 text-dark dark:text-gray-300">+98 912 123 4567</p>
                        </li>
                        <li>
                            <span className="font-semibold">📧 Email:</span>
                            <p className="ml-6 mt-1 text-dark dark:text-gray-300">support@yourshop.com</p>
                        </li>
                        <li>
                            <span className="font-semibold">🕘 Working Hours:</span>
                            <p className="ml-6 mt-1 text-dark dark:text-gray-300">Sat - Thu | 9 AM – 6 PM</p>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-[#F9FAFB] dark:bg-[#2B2B2B] p-8 rounded-3xl shadow-lg space-y-6">
                    <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-dark-blue hover:bg-blue-950 cursor-pointer transition text-white font-semibold py-3 px-6 rounded-xl shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
