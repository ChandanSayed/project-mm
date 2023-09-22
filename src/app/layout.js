import AppContextProvider from '@/context/AppContext';
import './globals.css';
// import Favicon from '/public/favicons/favicon.ico';

export const metadata = {
  title: 'MessageMoment - The real meaning to personal!',
  description: 'MessageMoment - The real meaning to personal!',
  creator: 'Chandan Sayed',
  icons: {
    icon: ['./favicons/favicon.ico'],
    apple: ['./favicons/apple-touch-icon.png'],
    shortcut: ['./favicons/android-chrome-192x192.png']
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
