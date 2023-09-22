import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-title" content="My App Title" />
      </Head>
      <NavBar />
      <main className="">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
