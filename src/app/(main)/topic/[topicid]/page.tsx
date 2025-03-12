import { getTopic } from '@/app/components/actions/topics';
import { Metadata } from 'next';
import React from 'react'
import ClientView from './ClientView';
import { fetchConceptByTopicId } from '@/app/components/actions/concepts';
import { getAllLanguages } from '@/app/components/actions/languages';

export async function generateMetadata({
  params = { topicid: "" },
}: {
  params: { topicid?: string };
}): Promise<Metadata> {
  const topicId = params.topicid || "";
  const topicData = await getTopic(topicId);

  return {
    title: `IronCodeMan | ${topicData?.name || "Home"}`,
    description: topicData?.description || "A reference for programmers.",
  };
}



export default async function TopicPage({params}: {params: Promise<{topicid: string}>}) {
  const topicId = (await params).topicid;
  const topicData = await getTopic(topicId ?? '');
  const concepts = await fetchConceptByTopicId(topicId ?? '');
  const languages = await getAllLanguages();

  return (
    <> 
      <article className={
        `my-[2rem] pt-[5rem]`
      }>
        <h3>{topicData?.name}</h3>
        <p className='fadeInLeft'>{topicData?.description}</p>
      </article>
      <ClientView concepts={concepts} languages={languages} />
    </>
  )
}
