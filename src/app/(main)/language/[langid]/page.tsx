import React from 'react'
import type { Metadata } from "next";
import { ConceptItem, Language } from '@/app/types';
import { getLanguage } from '@/app/components/actions/languages';
import { fetchConceptsByLanguage } from '@/app/components/actions/concepts';
import ClientView from './ClientView';

export async function generateMetadata({
  params = { langid: "" },
}: {
  params?: { langid?: string };
}): Promise<Metadata> {
  const languageId = params.langid || "";
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
