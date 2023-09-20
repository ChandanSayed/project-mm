import AppContextProvider from '@/context/AppContext';
import './globals.css';
// import Favicon from '/public/favicons/favicon.ico';

export const metadata = {
  title: 'MM',
  description: 'MM',
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
