'use client';

import { Settings, ShoppingBag, UserCircle2, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UserPanel() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1A1A] py-10 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">سلام، خوش اومدی 👋</h2>
        <p className="text-gray-500 mt-2 dark:text-gray-400">خوشحالیم که دوباره می‌بینیمت</p>
      </div>

      {/* Status Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { title: 'سفارش‌ها', count: 8, icon: ShoppingBag, color: 'bg-blue-100 text-blue-700' },
          { title: 'پیام‌ها', count: 3, icon: Bell, color: 'bg-yellow-100 text-yellow-700' },
          { title: 'اعلان‌ها', count: 5, icon: Settings, color: 'bg-red-100 text-red-700' },
        ].map(({ title, count, icon: Icon, color }, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl p-5 flex items-center justify-between shadow-md ${color}`}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-sm">{title}</p>
              <p className="text-xl font-bold">{count}</p>
            </div>
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <ActionCard title="پروفایل من" Icon={UserCircle2} href="/userpanel" />
        <ActionCard title="سفارش‌ها" Icon={ShoppingBag} href="/userpanel" />
        <ActionCard title="تنظیمات" Icon={Settings} href="/userpanel" />
      </div>
    </div>
  );
}

function ActionCard({ title, Icon, href }: { title: string; Icon: any; href: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl bg-white dark:bg-[#2A2A2A] p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center group"
    >
      <Icon className="text-blue-500 group-hover:scale-110 transition" size={36} />
      <p className="mt-4 text-gray-800 dark:text-white font-medium">{title}</p>
    </a>
  );
}
