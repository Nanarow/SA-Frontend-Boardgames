import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type HTTPMethod = "GET" | "POST" | "PATCH" | "DELETE";

function useFetch<T>(
  method: HTTPMethod,
  endpoint: string,
  body?: T
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        setLoading(false);
      } else {
        if (method !== "DELETE") {
          setData(result.data);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, loading, error };
}

export default useFetch;
