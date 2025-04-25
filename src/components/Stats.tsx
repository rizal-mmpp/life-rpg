'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

type StatCardProps = {
  title: string
  value: number
  maxValue: number
  icon: React.ReactNode
  color: string
}

function StatCard({ title, value, maxValue, icon, color }: StatCardProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className={`bg-${color}-50 rounded-lg p-4 flex items-center`}>
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className={`bg-${color}-500 h-2.5 rounded-full`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {value}/{maxValue}
        </p>
      </div>
    </div>
  )
}

export function Stats() {
  const { data: session } = useSession()
  const stats = session?.user?.stats || {
    health: 85,
    energy: 65,
    intelligence: 78,
    social: 72,
  }

  return (
    <section className="mb-12 bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Character Stats</h2>
        <span className="text-sm text-gray-500">Level {session?.user?.level || 1} Adventurer</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Health"
          value={stats.health}
          maxValue={100}
          color="red"
          icon={
            <svg className="w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          }
        />
        <StatCard
          title="Energy"
          value={stats.energy}
          maxValue={100}
          color="blue"
          icon={
            <svg className="w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"
              />
            </svg>
          }
        />
        <StatCard
          title="Intelligence"
          value={stats.intelligence}
          maxValue={100}
          color="purple"
          icon={
            <svg className="w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
              />
            </svg>
          }
        />
        <StatCard
          title="Social"
          value={stats.social}
          maxValue={100}
          color="green"
          icon={
            <svg className="w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16 17v2H2v-2s0-4 7-4 7 4 7 4m-3.5-9.5A3.5 3.5 0 109 11a3.5 3.5 0 003.5-3.5m3.44 5.5A5.32 5.32 0 0118 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 00-1.93.59 5 5 0 010 5.82A3.39 3.39 0 0015 11a3.5 3.5 0 000-7z"
              />
            </svg>
          }
        />
      </div>
    </section>
  )
} 