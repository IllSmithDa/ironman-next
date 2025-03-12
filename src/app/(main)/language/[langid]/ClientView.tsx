'use client'
import Loader from '@/app/components/Loader/Loader';
import { parseConcepts } from '@/app/helper/parseData';
import { ConceptItem, Language } from '@/app/types';
import React, { useEffect, useState } from 'react'

const topicList = [
  {
    title: 'Basics',
    value: 'basic'
  }, 
  {
    title: 'Data Structure',
    value: 'data'
  }, 
  {
    title: 'Iterables',
    value: 'iterables'
  }, 
  {
    title: 'Classes',
    value: 'class'
  }, 
  {
    title: 'Regex',
    value: 'regex'
  }, 
]



export default function ClientView({
  languageData,
  concepts
}: {
  languageData:Language | null,
  concepts: ConceptItem[]
}) {
  const [category, SetCategory] = useState("all");
  const [title, setTitle] = useState("All");
  const [categoryDrop, SetCategoryDrop] = useState(false);

  const handleTabChange = (topic: string, categoryTitle: string) => {
    SetCategory(topic);
    setTitle(categoryTitle);
    SetCategoryDrop(!categoryDrop);
  }

  useEffect(() => {
    if (concepts?.length) {
      for(let i = 0; i < concepts.length; i += 1) {
        parseConcepts(concepts[i].text, `${concepts[i].id}_code`);
      }
    }

  }, [concepts, category])


  const renderData = () => {
    return (
      <>
        {
          concepts?.filter(topic => topic.category === category || category === 'all').map((data) => (
            <li
              className={`
                dark:bg-[#272727]
                fadeInLeft
                box-border
                inline-block
                p-[1.5rem]
                mb-[1rem]
                w-[100%]
              `}
              key={data.id}
            >
              <h4>{data.concept_name}</h4>
              <pre id={`${data.id}_code`} className='code'>{data.text}</pre>
            </li>
          ))
        }
      </>
    )
  }

  const renderTopicButtons = (topicList)?.map((data) => (
    <button
      key={data.title}
      onClick={() => handleTabChange(data.value, data.title) }
      className={`
        w-[100%] text-[1.5rem] p-[1rem] bg-[#D9D9D9] relative z-[75]
        md:w-[200px]
        hover:bg-[#EFEFEF]
        ${category === data.value ? 'dark:bg-[#3C3C3C]': 'dark:bg-[#1C1C1C]'}
        cursor-pointer
        dark:hover:bg-[#3C3C3C]
      `}
    >
      {data.title}
    </button>
    ))

  return (
    <>  
      <h3 className='mt-[2rem]'>Concepts for {languageData?.name}</h3>
      <p className='fadeInLeft my-[2rem]'>
        {languageData?.description}
      </p>
      {
        !languageData || !concepts?.length?
        <></>:
        <section className={`
          relative flex
        `}>
        <button
          type='button'
          onClick={() => SetCategoryDrop(!categoryDrop)}
          className={`
            w-[100%] h-[47px] bg-[#EAEAEA] text-[1.5rem]
            hover:bg-[#EFEFEF]
            md:w-[200px]
            dark:bg-[#272727] dark:hover:bg-[#3C3C3C]
            cursor-pointer
          `}
        >
          {title} {categoryDrop ? <>▲</> : <>▼</>}
        </button>
        {
        categoryDrop ?
        <section className={`
          flex flex-col absolute top-[47px] left-0 gap-0 bg-[#EEE] w-[100%]
          md:w-[200px]
        `}>
          {renderTopicButtons}
        </section>:
            <></>
        }
        </section>
      }
      {concepts?.length ? 
        <ul className={`
            columns-[350px]
            mt-[2rem]
          `}>
          {renderData()}
        </ul>:
        <Loader />
      }
      {
        categoryDrop ? 
        <div
          className={`
            fixed z-50 left-0 top-0 w-[100%] h-[100%] justify-center flex-col overflow-auto
          `}
          onClick={() => {
            SetCategoryDrop(false); 
          }}
        >
        </div>:
        <></>
      }
    </>
  )
}
