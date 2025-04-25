import { Suspense } from 'react'
import { Header } from '../components/Header'
import { Stats } from '../components/Stats'
import { Categories } from '../components/Categories'
import { Achievements } from '../components/Achievements'
import { RecentActivity } from '../components/RecentActivity'
import { Navigation } from '../components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Navigation />
        <main className="flex-1">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <Suspense fallback={<div>Loading stats...</div>}>
              <Stats />
            </Suspense>
            
            <Suspense fallback={<div>Loading categories...</div>}>
              <Categories />
            </Suspense>
            
            <Suspense fallback={<div>Loading achievements...</div>}>
              <Achievements />
            </Suspense>
            
            <Suspense fallback={<div>Loading activity...</div>}>
              <RecentActivity />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
} 