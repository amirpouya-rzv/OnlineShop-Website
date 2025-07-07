import Link from 'next/link';
import { Monitor, ShoppingCart } from 'lucide-react';


function Headers() {
  return (
 <header className="flex p-5 bg-[#eddea4]  drop-shadow-gray-300  shadow-2xl justify-between">
            <Link
              href="/"
              className=" text-[#f7a072] hover:text-[#f7c978] transition-colors duration-300"
            >
              <div className="flex gap-3 items-center">
                <Monitor size={40} />
                <span className="text-xl font-serif font-bold">Online Shop</span>
              </div>
            </Link>
            <div>
              <ShoppingCart />
            </div>
          </header>  )
}

export default Headers