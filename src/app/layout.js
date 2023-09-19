import './globals.css';
// import Favicon from '/public/favicons/favicon.ico';

export const metadata = {
  title: 'MM',
  description: 'MM',
  creator: 'Chandan Sayed',
  icons: {
    icon: ['/favicons/favicon.ico'],
    apple: [],
    shortcut: []
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-dark">{children}</body>
    </html>
  );
}
