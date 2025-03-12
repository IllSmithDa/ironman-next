'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Something went wrong!</h2>
      <h3 className="font-semibold text-red-600 mb-4">Could not connect to the server.</h3>
      <button
        className="w-[150px] h-[50px] text-[1.5rem] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}