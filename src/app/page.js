import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import CookiesComponent from '@/components/CookiesComponent';
import CookiesPopup from '@/components/CookiesPopup';
import CookiesContainer from '@/components/CookiesContainer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <CookiesContainer />
      </main>
      <Footer />
    </>
  );
}
