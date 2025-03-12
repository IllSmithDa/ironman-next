import { getLanguage } from '@/app/actions/languages';
import Loader from '@/app/components/Loader/Loader';
import Navbar from '@/app/components/Navbar/Navbar';
import TopicsTab from '@/app/components/TopicsTab/TopicsTab';
import { Language } from '@/app/types';
import React, { Suspense } from 'react'

export default async function Languagelayout({children, params}: {children: React.ReactNode, params: Promise<{langid: string}>}) {
  const languageId = (await params).langid;
  const languageData:Language | null = await getLanguage(languageId);
  return (
    <>
      <Navbar languageName={languageData?.name} />
      <main className="2xl:w-[1600px] w-[100%] mx-auto flex">
        <TopicsTab />
        <Suspense fallback={<Loader />}>
          <section data-testid="main-content" className="relative w-[100%] z-0 pt-[6rem] md:px-[3rem] px-[1rem] mb-[20rem] mb-[20rem] w-[100%]">
            {children}
          </section>
        </Suspense>
      </main>
    </>
  )
}
