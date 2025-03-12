/* eslint-disable @typescript-eslint/no-unused-vars */
// import  { useEffect, useState } from 'react'
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import TopicMenu from './TopicMenu';
import { ConceptTopic } from '../../types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import iron from '/images/iron.svg';

import { getAllConceptTopics } from '../../actions/concepts';
import Image from 'next/image';
import LanguageContainer from './LanguageContainer';

export default async function Navbar({
  // darkMode,
  topicId,
  languageName
}: {
  // darkMode ?: boolean,
  topicId ?: string,
  languageName ?: string
}) {
  // const [isDark, setIsDark] = useState<boolean>();
  const topics:ConceptTopic[] = await getAllConceptTopics();

  return (
    <section
      className={`
       w-[100vw] bg-[#F1F1F1] h-[47px] fixed z-[100] top-0
       dark:bg-[#222]
      `}
    >
      <section
        className={`
          flex justify-between mx-[auto] relative
          2xl:w-[1600px]
          xl: w-[100%]
        `}
      >
        <ul
          className={`
            flex
          `}
        >
          <li
            className={`
              xl:hidden
              block
            `}
          >
            <TopicMenu 
              topics={topics}
              selectedId={topicId}
            />
          </li>
          <li
            className={`
              hidden
              xl:block
            `}
          >
            <Link href='/'>
              <Image src='/images/iron.svg' width={47} height={47} alt='app-icon' 
              />
            </Link>
          </li>
          <li
            className={`
              hidden
              xl:block
            `}
          >
            <Link href='/' className='w-[47px] h-[47px] flex justify-center flex-col align-center'>
              <h2
                className={`
                  text-[30px]
                `}
              >
                IronCodeMan
              </h2>
            </Link>
          </li>
        </ul>
        <ul
          className={`
            flex
          `}
        >
          <li>              
            <LanguageContainer 
              languageName={languageName}
            />
          </li>
        </ul>
      </section>
    </section>
  )
}