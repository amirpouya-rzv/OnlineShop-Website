import React from 'react'
import Image from 'next/image'

function AboutUs() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark-card px-5 py-16 md:px-20 rounded-2xl text-dark-blue dark:text-white">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
                <p className="text-lg md:text-xl text-dark-blue dark:text-white max-w-3xl mx-auto">
                    Welcome to YourShop — where innovation meets customer satisfaction. We're more than a store; we're a digital experience designed to simplify your life.
                </p>
            </div>

            {/* Image + Description */}
            <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
                <Image
                    src="/teamworking.jpg"
                    quality={100}
                    alt="Team working"
                    width={500}
                    height={400}
                    className="rounded-3xl w-full md:w-[500px] h-auto shadow-xl"
                />
                <div className="flex-1 space-y-5 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Who We Are</h2>
                    <p className="text-dark-blue dark:text-white">
                        At YourShop, we started with one goal: to bring high-quality products directly to your door with speed, reliability, and care. Our passionate team is dedicated to offering you the best online shopping experience possible.
                    </p>
                    <p className="text-dark-blue dark:text-white">
                        From our hand-picked products to our responsive support, everything is designed around you — the customer.
                    </p>
                </div>
            </div>

            {/* Mission and Values */}
            <div className="bg-[#F9FAFB] dark:bg-[#2B2B2B] rounded-3xl p-10 shadow-lg mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Values</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h3>
                        <p className="text-dark-blue dark:text-white">
                            We ship your products quickly and safely, nationwide.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">💬 Real Support</h3>
                        <p className="text-dark-blue dark:text-white">
                            Our support team is available 24/7 to assist you before and after every purchase.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🎯 Customer-Centric</h3>
                        <p className="text-dark-blue dark:text-white">
                            We listen, improve, and evolve — always putting your needs first.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final Call */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Thank You for Choosing Us 💙</h2>
                <p className="text-dark-blue dark:text-white">
                    Your trust means everything. We’re constantly working to improve our service, grow our catalog, and deliver value with every order.
                </p>
            </div>
        </div>
    )
}

export default AboutUs
