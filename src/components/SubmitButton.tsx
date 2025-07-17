'use client'

import { LoaderPinwheel } from 'lucide-react'
import { useFormStatus } from 'react-dom'



export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className='w-full bg-dark-blue hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md'
            disabled={pending}
            type="submit"
        >
            {
                pending ? (
                    <LoaderPinwheel className='animate-spin mx-auto' />
                ) : (
                    <span>Login</span>
                )
            }
        </button>
    )
}
