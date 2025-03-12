import React from 'react'
import { getAllLanguages } from '../actions/languages';
import { Language } from '@/app/types';
import LanguageMenu from './LanguageMenu';


export default async function LanguageContainer({
  languageName,
  } : {
  languageName ?: string,
}) {

  const languages:Language[] = await getAllLanguages();

  return (
    <>
      <LanguageMenu 
        languageName={languageName}
        languages={languages}
      />
    </>
  )
}
