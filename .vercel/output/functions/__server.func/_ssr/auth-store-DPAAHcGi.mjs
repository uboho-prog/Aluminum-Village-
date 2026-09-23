import { r as reactExports } from "../_libs/react.mjs";
const KEY = "av_auth_user";
const EVT = "av-auth-change";
function getAuthUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function setAuthUser(user) {
  if (typeof window === "undefined") return;
  if (user) localStorage.setItem(KEY, JSON.stringify(user));
  else localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVT));
}
function useAuthUser() {
  const [user, setUser] = reactExports.useState(null);
  reactExports.useEffect(() => {
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
export {
  setAuthUser as s,
  useAuthUser as u
};
