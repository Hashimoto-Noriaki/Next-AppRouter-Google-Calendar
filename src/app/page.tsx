'use client'

import { useRouter } from 'next/navigation'
import { PrimaryBtn } from '@/shared/atoms/PrimaryBtn'

export default function Home() {
  const router = useRouter()
  return(
    <div className="relative">
      <header className="bg-white leading-12.5 fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>利用説明</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mt-12.5 bg-linear-to-r from-lime-100 to-lime-200 h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl logo">スケジュール管理APP</h1>
          <p className="pt-[10vh] text-5xl">お互いのスケジュールを管理するアプリです</p>
        </div>
        <div className="pt-[20vh]">
          <PrimaryBtn onClick={() => router.push("/login")}>ログイン</PrimaryBtn>
        </div>
      </main>
    </div>
  )
}   