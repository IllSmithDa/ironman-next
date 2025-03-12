import React from 'react'
import type { Metadata } from "next";
import { ConceptItem, Language } from '@/app/types';
import { getLanguage } from '@/app/actions/languages';
import { fetchConceptsByLanguage } from '@/app/actions/concepts';
import ClientView from './ClientView';
type Params = Promise<{ langid: string }>

// https://stackoverflow.com/questions/79113322/nextjs-react-type-does-not-satisfy-constraint
export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const languageId = params.langid;
  const languageData = await getLanguage(languageId);

  return {
    title: `IronCodeMan | ${languageData?.name || "Home"}`,
    description: languageData?.description || "A reference for programmers.",
  };
}


export default async function LanguagePage({params}: {params: Promise<{langid: string}>}) {
  // const [isLoading, setIsLoading] = useState(true);
  const languageId = (await params).langid;


  const languageData:Language | null = await getLanguage(languageId);
  const concepts: ConceptItem[] = await fetchConceptsByLanguage(languageData?.name ?? '');


  return (
    <>
      <ClientView 
        languageData={languageData ?? null}
        concepts={concepts}
      />
    </>
  )
}
