'use client';

import React, { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: "Fast & Free Shipping",
    subtitle: "Get your orders delivered quickly and at no extra cost",
    content:
      "Enjoy fast and free shipping on all orders with our trusted delivery partners. We ensure that your products are delivered safely and on time, no matter where you are. Shopping with us means you don't have to worry about additional shipping fees or long waiting times. Our logistics team works around the clock to make sure you receive your package as quickly as possible, with full tracking available for every order.",
  },
  {
    id: 2,
    title: "Easy Returns & Refunds",
    subtitle: "Shop with confidence with our hassle-free return policy",
    content:
      "Customer satisfaction is our top priority. If for any reason you're not completely happy with your purchase, you can easily return it within 7 days of delivery for a full refund. No questions asked. We make the return process simple and transparent, ensuring you can shop with total peace of mind. Our support team is ready to assist you at every step of the return process.",
  },
  {
    id: 3,
    title: "Secure Payment Methods",
    subtitle: "Shop safely with trusted payment gateways",
    content:
      "Your security is extremely important to us. All transactions on our platform are processed through encrypted and trusted payment gateways, ensuring your financial information remains safe and confidential. We accept various payment methods including major credit cards, digital wallets, and bank transfers, making it easy for you to complete your purchase securely and conveniently.",
  },
  {
    id: 4,
    title: "24/7 Customer Support",
    subtitle: "We're here whenever you need help",
    content:
      "Have a question about your order or need help with a product? Our dedicated customer support team is available 24/7 to assist you with anything you need. Whether it's tracking your order, solving a payment issue, or answering product inquiries, we are always here to provide you with the help you deserve. You can reach us anytime through live chat, email, or phone.",
  },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className=" max-w-5xl mx-auto mt-16 mb-32">
      <span className="flex justify-start text-xl font-bold dark:text-white text-dark-blue mb-4">
        Why Shop With Us?
      </span>

      <div className="text-sm font-medium text-dark-blue border-b border-gray-300 rounded-2xl bg-gray-50">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-1">
              <button
                className={`w-full py-3 px-4 text-center font-medium transition-colors duration-300 ease-in-out ${
                  activeTab === tab.id
                    ? 'text-dark-blue border-b-2 border-dark-blue  dark:bg-dark-card dark:text-white '
                    : 'text-gray-600 hover:text-dark-blue'
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative p-6  border dark:bg-dark-card dark:text-white border-gray-300 rounded-lg shadow-md mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-700 ease-in-out transform ${
              activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
            }`}
          >
            <h2 className="text-xl font-semibold text-dark-blue dark:text-white">{tab.title}</h2>
            <h3 className="text-lg font-medium text-dark-blue mt-2 dark:text-white">
              {tab.subtitle}
            </h3>
            <p className="text-base font-light text-dark-blue dark:text-white mt-4 leading-relaxed">
              {tab.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
