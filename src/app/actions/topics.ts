import { ConceptTopic } from "@/app/types";

export async function getTopic(topicId: string):Promise<ConceptTopic | null> {
  try {
    const res = await fetch(`${process.env.MAIN_API_URL}/api/concept/topic-object/${topicId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topic, status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null; // Return string error message
  }
}