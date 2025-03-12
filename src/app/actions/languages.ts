"use server";

import { Language } from "../types";

export async function getAllLanguages(): Promise<Language[]> {
  try {
    const res = await fetch(`${process.env.MAIN_API_URL}/api/language/all-languages`, {
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
    return data.data as Language[];
  } catch (error) {
    console.error("Error fetching languages:", error);
    return []; 
  }
}


export async function getLanguage(languageId: string):Promise<Language | null> {
  try {

    // console.log(languageId);
    const res = await fetch(`${process.env.MAIN_API_URL}/api/language/by-id/${languageId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data every request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch languages, status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    return null; // Return string error message
  }
}