'use client';
import { useState, createContext, useContext } from 'react';

export const AppContext = createContext(Boolean);

export default function AppContextProvider({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  return <AppContext.Provider value={{ mobileNav, setMobileNav, showCookies, setShowCookies }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
