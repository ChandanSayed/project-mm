'use client';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CookiesContainer from '@/components/CookiesContainer';
import AboutTwoColumnSection from '@/components/AboutTwoColumnSection';
import chat from '/public/home/chat.png';
import clock from '/public/home/clock.png';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <AboutTwoColumnSection bg={chat} classes="flex-row-reverse pt-[239px] pb-[59px] lg:pt-[162px] lg:pb-[100px]" imgClass="max-w-[474px] w-full" pr="pr-16" title="Speak freely and without concern" des="It is said that words cannot be unspoken, but they can be unwritten with MessageMoment’s in-the-moment chat service that guarantees your conversation is history. Start chatting now and experience the privacy and security of MessageMoment." />
        <AboutTwoColumnSection bg={clock} classes="pt-[94px] pb-[83px] lg:pt-[100px] lg:pb-[100px]" imgClass="max-w-[426px] w-full" pr="pr-16" title="Your message only lasts a moment" des="We believe that words can be a powerful tool for connection and communication, but it's also true that words cannot be unspoken. That's why we created a live chat service that lets you unwrite those words, with a unique chat link and a secure, in-the-moment chat experience." />
        <CookiesContainer />
      </main>
      <Footer />
    </>
  );
}
