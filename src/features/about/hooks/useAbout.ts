import { getPage } from "@/core/api/pageApi";
import { Page } from "@/core/api/pageApi/types";
import { useState } from "react";

export const useAbout = () => {
  const [about, setAbout] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAbout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getPage("2");
      // Handle the API response structure: { status: 200, data: Page, message: "Success" }
      setAbout(response.data || response);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    about,
    isLoading,
    error,
    getAbout,
  };
};
