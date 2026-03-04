import { useEffect } from "react";

/**
 * ProtectedRoute
 * ----------------
 * Guards private pages.
 * Redirects unauthenticated users to Login.
 */
export default function ProtectedRoute({ children, setPage }) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setPage("login");
    }
  }, [token, setPage]);

  // While redirecting, render nothing
  if (!token) {
    return null;
  }

  return <>{children}</>;
}
