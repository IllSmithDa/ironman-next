import Loader from '@/app/components/Loader/Loader';
import Navbar from '@/app/components/Navbar/Navbar';
import React, { Suspense } from 'react'

export default async function Pirvacylayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar/>
      <main className="2xl:w-[1600px] w-[100%] mx-auto flex">
        <Suspense fallback={<Loader />}>
          <section data-testid="main-content" className="relative w-[100%] z-0 pt-[6rem] md:px-[3rem] px-[1rem] mb-[20rem] mb-[20rem] w-[100%]">
            {children}
          </section>
        </Suspense>
      </main>
    </>
  )
}