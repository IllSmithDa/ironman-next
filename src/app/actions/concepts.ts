"use server";

import { ConceptItem, ConceptTopic } from "../types";

export async function getAllConceptTopics(): Promise<ConceptTopic[]> {
  try {
    const res = await fetch(`${process.env.MAIN_API_URL}/api/concept/all-topics`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data every request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Concepts, status: ${res.status}`);
    }

    const data = await res.json();
    return data.data as ConceptTopic[];
  } catch (error) {
    console.error("Error fetching languages:", error);
    return []; // Return empty array on failure
  }
}

export async function fetchConceptsByLanguage(languageName: string):Promise<ConceptItem[]> {
  try {
    const res = await fetch(`${process.env.MAIN_API_URL}/api/concept/by-language`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: languageName }),
      cache: "no-store", // Ensures fresh data every request
    });


    if (!res.ok) {
      throw new Error(`Failed to fetch languages, status: ${res.status}`);
    }

    const data = await res.json();
    return data.data as ConceptItem[];
  } catch (error) {
    console.error("Error fetching languages:", error);
    return []; // Return string error message
  }
}

export async function fetchConceptByTopicId(topicId: string):Promise<ConceptItem[]> {
  try {
    const res = await fetch(`${process.env.MAIN_API_URL}/api/concept/topic-id/${topicId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });


    if (!res.ok) {
      throw new Error(`Failed to fetch languages, status: ${res.status}`);
    }

    const data = await res.json();
    return data.data as ConceptItem[];
  } catch (error) {
    console.error("Error fetching languages:", error);
    return []; // Return string error message
  }
}