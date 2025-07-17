'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('An error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong</h1>
      <p className="text-gray-700 max-w-md mb-6">
        An unexpected error occurred while loading this section. It might be temporary. Please try again or come back later.
      </p>
      <button
        onClick={reset}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
      >
        Try Again
      </button>
    </div>
  );
}
  