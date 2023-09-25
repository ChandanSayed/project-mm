import AppContextProvider from '@/context/AppContext';
import './globals.css';

export const metadata = {
  title: 'MessageMoment - The real meaning to personal!',
  description: 'MessageMoment - The real meaning to personal!',
  creator: 'Chandan Sayed',
  applicationName: 'MessageMoment',
  siteName: 'MessageMoment',
  appleWebApp: {
    title: 'MessageMoment'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-dark">
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
