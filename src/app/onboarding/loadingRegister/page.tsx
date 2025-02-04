'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const LoadingPage = () => {
  const router = useRouter()
  const [loadingText, setLoadingText] = useState(0)
  const [userName, setUserName] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  const loadingMessages = [
    'Processing your request...',
    'Calculating your eligible amount...',
    'Analyzing your profile...',
    'Preparing your personalized offers...',
    'Almost there...',
    'All set! Redirecting you now...', // New confirmation message
  ]

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('userData')
    if (userData) {
      const { fullName } = JSON.parse(userData)
      const firstName = fullName.split(' ')[0]
      setUserName(firstName)
    }

    // Change loading message every 2 seconds
    const messageInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === loadingMessages.length - 2) {
          // When reaching "Almost there..."
          clearInterval(messageInterval)
          // Set confirmation state after a delay
          setTimeout(() => {
            setIsConfirmed(true)
            setLoadingText(prev + 1)
            // Redirect after showing confirmation
            setTimeout(() => {
              router.push('/p/home')
            }, 2000)
          }, 1000)
          return prev
        }
        return prev < loadingMessages.length - 2 ? prev + 1 : prev
      })
    }, 2000)

    return () => {
      clearInterval(messageInterval)
    }
  }, [router, loadingMessages.length])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-purple-600 animate-fade-in">
          Hi, {userName}! 👋
        </h1>
      </div>

      {/* Loading/Confirmation Animation */}
      <div className="mb-8">
        {isConfirmed ? (
          <div className="text-purple-600 animate-bounce-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
        ) : (
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
        )}
      </div>

      {/* Loading Message */}
      <div className="text-center space-y-4">
        <p
          className="text-xl text-purple-600 font-medium animate-fade-in"
          key={loadingText}
        >
          {loadingMessages[loadingText]}
        </p>
        {!isConfirmed && (
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Processing Steps */}
      <div className="mt-12 max-w-md w-full">
        {loadingMessages.slice(0, -1).map((message, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 mb-4 ${
              index <= loadingText ? 'text-purple-600' : 'text-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                index <= loadingText ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              {index <= loadingText &&
                (isConfirmed ? (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ))}
            </div>
            <span
              className={`text-sm ${
                index <= loadingText ? 'text-gray-700' : 'text-gray-400'
              }`}
            >
              {message}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingPage
