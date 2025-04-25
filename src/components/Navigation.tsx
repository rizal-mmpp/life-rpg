'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, ClipboardIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Quests', href: '/quests', icon: ClipboardIcon },
  { name: 'Stats', href: '/stats', icon: ChartBarIcon },
  { name: 'Achievements', href: '/achievements', icon: TrophyIcon },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:relative md:shadow-none">
      <div className="flex justify-around md:flex-col md:h-screen md:w-64 md:border-r md:border-gray-200">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-3 px-4 transition-colors ${
                isActive
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 