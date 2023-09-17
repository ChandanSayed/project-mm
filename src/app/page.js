import Image from 'next/image';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import NotFound from './404';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <ContactForm />
        <NotFound/>
      </main>
      <Footer />
    </>
  );
}
