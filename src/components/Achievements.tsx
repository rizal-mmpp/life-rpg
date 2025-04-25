'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

type Achievement = {
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
}

export function Achievements() {
  const { data: session } = useSession()
  const achievements: Achievement[] = (session?.user as any)?.achievements || [
    {
      title: 'First Gold',
      description: 'Earned your first $100',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2L6.5 11h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM3 21.5h18v-2H3v2zM10 9.5H8v2H6v2h2v2h2v-2h2v-2h-2v-2z"
          />
        </svg>
      ),
      unlocked: true,
    },
    {
      title: '7-Day Streak',
      description: 'Completed a 7-day workout streak',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
          />
        </svg>
      ),
      unlocked: true,
    },
  ]

  return (
    <section className="mb-12 bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Achievements</h2>
        <span className="text-sm text-gray-500">
          {achievements.filter(a => a.unlocked).length}/{achievements.length} unlocked
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-16 h-16 mx-auto rounded-full ${
                achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'
              } flex items-center justify-center mb-2`}
            >
              {achievement.icon}
            </div>
            <p className="text-xs font-semibold">{achievement.title}</p>
            {achievement.unlocked && (
              <p className="text-xs text-gray-500">{achievement.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
} 