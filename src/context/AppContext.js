'use client';
import { useState, createContext, useContext } from 'react';

export const AppContext = createContext(Boolean);

export default function AppContextProvider({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileChatNav, setMobileChatNav] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  return <AppContext.Provider value={{ mobileNav, setMobileNav, mobileChatNav, setMobileChatNav, showCookies, setShowCookies, showCookiesModal, setShowCookiesModal }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
