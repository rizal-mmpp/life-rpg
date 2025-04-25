'use client'

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-2xl font-bold">Life RPG</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span id="points-counter" className="font-bold">
                {session?.user?.points || 0}
              </span>
            </div>
            
            {session ? (
              <div className="flex items-center space-x-4">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <span className="text-lg font-bold">
                      {session.user?.name?.[0] || '?'}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-sm hover:text-indigo-200"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 