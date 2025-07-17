import React from 'react'
import Image from 'next/image'

function Whattodo() {
    return (
        <div className='md:grid md:grid-cols-2 md:m-8'>
            {/* تیتر تبلیغاتی فروشگاه */}
            <p className='mt-20 mb-10 text-center font-inter text-2xl md:text-start md:text-4xl font-extrabold dark:text-white text-dark-blue'>
                Everything you need for a perfect online shopping experience
            </p>

            <p className='mt-3 text-center px-5  mb-5 text-dark-blue dark:text-white text-2xl md:text-xl 
            md:mt-[88px] md:mx-16 md:text-start font-noto '>
                From quality products to fast delivery and 24/7 support — we’re here to make your shopping easy and enjoyable.
            </p>

            {/* خدمات فروشگاه */}
            <div className='flex flex-col text-start'>
                {/* ارسال سریع */}
                <div className='w-[250px] py-5 text-center md:w-[500px] md:h-36 m-5 flex flex-col justify-center items-center h-40 mt-5 bg-background-color dark:bg-dark-card shadow-xl rounded-3xl md:-ml-12 mx- ml-5'>
                    <h1 className='font-noto text-xl font-bold md:mr-36 mb-2 md:text-start dark:text-white text-dark-blue'>
                        Fast & Reliable Delivery
                    </h1>
                    <p className='md:px-20 -mx-1 text-dark-blue dark:text-white md:mx-2 text-center md:text-start'>
                        We deliver your orders quickly and safely to your doorstep — anywhere in the country.
                    </p>
                </div>

                {/* پشتیبانی شبانه‌روزی */}
                <div className='w-[250px] py-5 text-center md:w-[500px] md:h-36 ml-5 mr-5 flex flex-col justify-center items-center h-40 mt-5 bg-background-color dark:bg-dark-card shadow-xl rounded-3xl'>
                    <h1 className='font-noto text-xl font-bold dark:text-white text-dark-blue md:mr-24 mb-2 md:text-start'>
                        24/7 Support
                    </h1>
                    <p className='md:px-20 text-dark-blue dark:text-white mx-1 text-center md:text-start'>
                        Our support team is always here to help you — before and after your purchase.
                    </p>
                </div>

                {/* تضمین کیفیت */}
                <div className='w-[250px] py-5 mt-10 text-center md:w-[500px] text-accent md:h-36 mr-5 flex flex-col justify-center items-center h-40  bg-background-color dark:bg-dark-card shadow-xl rounded-3xl md:-ml-12 mx-3 ml-5'>
                    <h1 className='dark:text-white text-dark-blue font-noto text-xl font-bold md:mr-10 mb-2'>
                        Quality Guarantee
                    </h1>
                    <p className='dark:text-white text-dark-blue md:px-20 text-center md:text-start'>
                        We only offer top-quality, tested, and trusted products — with return and exchange options.
                    </p>
                </div>
            </div>

            {/* تصاویر تبلیغاتی فروشگاه */}
            <div className='flex flex-col md:flex-row gap-5 mb-32'>
                <Image
                    src="/images.jpg"
                    width={310}
                    height={360}
                    alt="Our products"
                    className='rounded-3xl mt-10 md:w-72'
                />
                <div className='flex flex-col mt-6 gap-7'>
                    <Image
                        src="/download.jpg"
                        width={450}
                        height={450}
                        alt="Customer support"
                        className='md: w-80 rounded-3xl md:h-56'
                    />
                    <Image
                        src="/download (1).jpg"
                        width={450}
                        height={450}
                        alt="Delivery service"
                        className='  w-80 rounded-3xl md:h-56 mt-6 md:mt-0'
                    />
                </div>
            </div>
        </div>
    )
}

export default Whattodo
