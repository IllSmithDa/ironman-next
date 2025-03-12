"use client"
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import LanguageSelect from './LanguageSelect'
import { ActiveConceptItem, ActiveLanguages, ConceptItem, Language } from '@/app/types'
import { parseConcepts } from '@/app/helper/parseData'
import Loader from '@/app/components/Loader/Loader'

export default function ClientView({ concepts, languages }: {
  concepts: ConceptItem[],
  languages: Language[]
}) {

  const [conceptsAndLanguages, setConceptsAndLanguages] = useState<ActiveConceptItem[]>();

  useEffect(() => {
    let activeLanguages: ActiveLanguages = {};
    if (localStorage.getItem('iron_code_languages') === null) {
      languages.forEach((entry) => {
        activeLanguages[entry.name] = true;
      })
      localStorage.setItem('iron_code_languages', JSON.stringify(activeLanguages))
    } else {
      activeLanguages = JSON.parse(localStorage.getItem('iron_code_languages') as string);
    }
    
    const activeConcepts:ActiveConceptItem[] = concepts.map((entry) => {
      return {
        ...entry,
        checked: activeLanguages[entry.language],
      }
    });

    setConceptsAndLanguages(activeConcepts)
  }, [concepts, languages])

  useEffect(() => {
    if (conceptsAndLanguages?.length) {
      for(let i = 0; i < conceptsAndLanguages.length; i += 1) {
        parseConcepts(conceptsAndLanguages[i].text, `${conceptsAndLanguages[i].id}_code`);
      }
    }

  }, [conceptsAndLanguages])

  const updateLanguages = useCallback((language: string, newChecked: boolean) => {
    setConceptsAndLanguages((prev) =>
      prev?.map((data) =>
        data.language === language ? { ...data, checked: newChecked } : data
      )
    );
  }, []);

  const renderData = (conceptsAndLanguages as ActiveConceptItem[])?.map((data) => (
    <div key={data.id}>
      {
        data.checked ? 
        <article
          className={`
            dark:bg-[#272727]
            fadeInLeft
            box-border
            inline-block
            p-[1.5rem]
            mb-[1rem]
            w-[100%]
            `
          }
        >
          <h4>{data.language}</h4>
          <pre
            id={`${data.id}_code`}
          >
            {data.text}
          </pre>
        </article>:
        <></>
      }
      </div>
  ))

  return (
    <> 
      <section className='my-[2rem]'>
        <Suspense fallback={<Loader />}>
          <LanguageSelect languages={conceptsAndLanguages} updateLanguages={updateLanguages}/>
        </Suspense>
      </section>
      <h4 className={`
        mt-[2rem]
      `}>
        Examples
      </h4>
      {conceptsAndLanguages?.length ?
        <section
          key="language-listing"
          className={
            `columns-[350px]`
          }
        >
          {renderData}
        </section>:
        <Loader />
      }
    </>
  )
}
