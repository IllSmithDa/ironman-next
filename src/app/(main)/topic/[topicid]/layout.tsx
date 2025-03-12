import Loader from '@/app/components/Loader/Loader';
import Navbar from '@/app/components/Navbar/Navbar';
import TopicsTab from '@/app/components/TopicsTab/TopicsTab';
import React, { Suspense } from 'react'

export default async function Languagelayout({children, params}: {children: React.ReactNode, params: Promise<{topicid: string}>}) {
  const topicId = (await params).topicid;

  return (
    <>
      <Navbar topicId={topicId} />
      <main className="2xl:w-[1600px] w-[100%] mx-auto flex ">
        <TopicsTab selectedId={topicId} />
        <Suspense fallback={<Loader />}>
          <section className="relative w-[100%] z-0 md:px-[3rem] px-[1rem]">
            {children}
          </section>
        </Suspense>
      </main>
    </>
  )
}