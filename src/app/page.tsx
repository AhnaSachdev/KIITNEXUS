
'use client'

import Landing from '@/components/Landing'
import Bot from '@/components/Bot'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Landing />
      {/* Bot widget — fixed, visible on every page */}
      <Bot />
    </div>
  )
}
