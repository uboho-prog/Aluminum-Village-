import { useEffect, useState } from "react";

export type AuthUser = { name: string; email: string } | null;
const KEY = "av_auth_user";
const EVT = "av-auth-change";

export function getAuthUser(): AuthUser {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setAuthUser(user: AuthUser) {
  if (typeof window === "undefined") return;
  if (user) localStorage.setItem(KEY, JSON.stringify(user));
  else localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVT));
}

export function useAuthUser(): AuthUser {
  const [user, setUser] = useState<AuthUser>(null);
  useEffect(() => {
    setUser(getAuthUser());
    const onChange = () => setUser(getAuthUser());
    window.addEventListener(EVT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  return user;
}
