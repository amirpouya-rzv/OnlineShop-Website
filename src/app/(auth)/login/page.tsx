import { SubmitButton } from "@/components/SubmitButton";
import { loginAction } from "../../../../actions/uthActions";

export default function LoginPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-white dark:bg-[#1A1A1A] py-12">
      <div className="w-full  max-w-md bg-[#F9FAFB] dark:bg-[#2B2B2B] p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-dark-blue dark:text-white mb-8">
          Login
        </h2>

        <form action={loginAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300 text-gray-700">
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-light-gray bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-light-gray bg-white dark:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-dark-blue"
              placeholder="Insert your Password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              value="1"
              id="remember"
              className="accent-dark-blue"
            />
            <label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-300">
              Remember me
            </label>
          </div>

        <SubmitButton/>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Don’t have an account?{' '}
          <a href="/login" className="text-dark-blue dark:text-white hover:underline">
            Sign up
          </a>
        </p>
           <div className="mt-5 text-rose-500">
          <p>Phone Number : 09110000000</p>
          <p>Password : 123456</p>

        </div>  
      </div>
    </div>
  )
}
