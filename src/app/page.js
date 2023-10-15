'use client';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CookiesContainer from '@/components/CookiesContainer';
import AboutTwoColumnSection from '@/components/AboutTwoColumnSection';
import chat from '/public/home/chat.png';
import clock from '/public/home/clock.png';
import { useAppContext } from '@/context/AppContext';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Guide from '@/components/Guide';
import Discover from '@/components/Discover';
import LinkGenerate from '@/components/LinkGenerate';

export default function Home() {
  const { setMobileNav } = useAppContext();
  useEffect(() => {
    setMobileNav(false);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        {/* <LinkGenerate /> */}
        <AboutTwoColumnSection bg={chat} main="max-lg:relative max-lg:bottm-[200px]" classes="flex-row-reverse pt-[239px] pb-[59px] lg:pt-[162px] relative max-lg:bottom-16 lg:pb-[100px]" imgclassName="max-w-[474px] w-full" pr="pr-16" title="Converse with ease and assurance." des="It is said that words cannot be unspoken, but they can be unwritten with MessageMoment’s in-the-moment chat service that guarantees your conversation is history. Start chatting now and experience the privacy and security of MessageMoment." />
        <Guide />
        <AboutTwoColumnSection bg={clock} classes="pt-[94px] pb-[83px] lg:pt-[100px] lg:pb-[100px]" imgclassName="max-w-[426px] w-full" pr="pr-16 lg:pr-8" title="Your message only lasts a moment." des="We believe that words can be a powerful tool for connection and communication, but it's also true that words cannot be unspoken. That's why we created a live chat service that lets you unwrite those words, with a unique chat link and a secure, in-the-moment chat experience." />
        <Discover />
        <CookiesContainer />
      </main>
      <Footer classes="mt-0" />
    </>
  );
}
