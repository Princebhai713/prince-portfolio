import { useQuery } from "@tanstack/react-query";

interface AuthResponse {
  isAuthenticated: boolean;
}

export function useAuth() {
  const { data, isLoading, error } = useQuery<AuthResponse>({
    queryKey: ["/api/admin/check"],
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    isAuthenticated: data?.isAuthenticated ?? false,
    isLoading,
    error,
  };
}
