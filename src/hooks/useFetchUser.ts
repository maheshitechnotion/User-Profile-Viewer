import { useState, useEffect } from "react";
import { fetchRandomUser } from "../api/randomUser";

export const useFetchUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = await fetchRandomUser();
      setUser(userData);
    } catch (err) {
      setError("Failed to fetch user.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, loading, error, getUser };
};
