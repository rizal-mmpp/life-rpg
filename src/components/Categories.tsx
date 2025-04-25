'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

type Category = {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  progress: number
}

type CategoryCardProps = Category

function CategoryCard({ title, description, icon, color, progress }: CategoryCardProps) {
  return (
    <div className={`bg-${color}-50 rounded-lg p-6`}>
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-${color}-500 h-2.5 rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-2">{progress}% Complete</p>
    </div>
  )
}

export function Categories() {
  const { data: session } = useSession()
  const categories: Category[] = (session?.user as any)?.categories || [
    {
      title: 'Physical Health',
      description: 'Exercise, nutrition, and wellness',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
          />
        </svg>
      ),
      color: 'red',
      progress: 65,
    },
    {
      title: 'Mental Health',
      description: 'Mindfulness, stress management, and emotional well-being',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          />
        </svg>
      ),
      color: 'blue',
      progress: 45,
    },
    {
      title: 'Career',
      description: 'Professional development and work-life balance',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
          />
        </svg>
      ),
      color: 'green',
      progress: 75,
    },
    {
      title: 'Relationships',
      description: 'Family, friends, and social connections',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16 17v2H2v-2s0-4 7-4 7 4 7 4m-3.5-9.5A3.5 3.5 0 109 11a3.5 3.5 0 003.5-3.5m3.44 5.5A5.32 5.32 0 0118 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 00-1.93.59 5 5 0 010 5.82A3.39 3.39 0 0015 11a3.5 3.5 0 000-7z"
          />
        </svg>
      ),
      color: 'purple',
      progress: 60,
    },
  ]

  return (
    <section className="mb-12 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Life Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category: Category, index: number) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  )
} 