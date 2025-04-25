'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

type Activity = {
  type: string
  description: string
  xpChange: number
  coinChange?: number
  timestamp: string
}

export function RecentActivity() {
  const { data: session } = useSession()
  const activities: Activity[] = (session?.user as any)?.activities || [
    {
      type: 'completed',
      description: 'Morning Workout',
      xpChange: 25,
      coinChange: 10,
      timestamp: '2 hours ago',
    },
    {
      type: 'added',
      description: 'New skill "Spanish"',
      xpChange: 10,
      timestamp: '5 hours ago',
    },
    {
      type: 'achievement',
      description: 'Unlocked "Bookworm"',
      xpChange: 50,
      coinChange: 25,
      timestamp: 'Yesterday',
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completed':
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
              />
            </svg>
          </div>
        )
      case 'added':
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
              />
            </svg>
          </div>
        )
      case 'achievement':
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 2H4v2h16V2zm-2 4H6v2h12V6zm-2 4H8v2h8v-2zm-2 4h-4v2h4v-2z"
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            {getActivityIcon(activity.type)}
            <div className="ml-4">
              <p className="font-medium text-gray-800">{activity.description}</p>
              <p className="text-sm text-gray-500">
                +{activity.xpChange} XP • {activity.timestamp}
              </p>
            </div>
            {activity.coinChange && (
              <div className="ml-auto text-yellow-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2L6.5 11h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM3 21.5h18v-2H3v2zM10 9.5H8v2H6v2h2v2h2v-2h2v-2h-2v-2z"
                  />
                </svg>
                {activity.coinChange}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
} 