import Image from 'next/image';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
