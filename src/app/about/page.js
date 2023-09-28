import Link from 'next/link';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import about1 from '../../../public/about/about1.png';
import about2 from '../../../public/about/about2.png';
import about3 from '../../../public/about/about3.png';
import about4 from '../../../public/about/about4.png';
import chat from '../../../public/icons/chat-hash.png';
import light from '../../../public/icons/light.png';
import bg1 from '../../../public/about/Background.png';
import bg2 from '../../../public/about/Background2.png';
import bg3 from '../../../public/about/bg3.jpg';
import bg4 from '../../../public/about/bg4.jpg';
import Swiper from '@/components/Slider/Slider';

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
        <div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[60px] max-md:text-[34px] max-md:px-5 font-bold leading-[70px] max-md:leading-[34px] text-center  text-dark mt-[51px] mb-[30px] tracking-[-0.5px]">Welcome to MessageMoment</h1>
            <p className="text-blue  text-center text-[17px] leading-6 font-medium px-6 max-w-[586px]">The untraceable live chat service that allows you to have a private, discreet and secure conversation with anyone, anywhere.</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="my-[51px] grid grid-cols-4 gap-5 max-lg:grid-cols-2 ">
              <Image src={about1} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="" />
              <Image src={about2} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="" />
              <Image src={about3} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="" />
              <Image src={about4} className="lg:w-[260px] lg:h-[242px] object-cover w-[180px] h-[150px] rounded-[20px]" alt="" />
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <p className="text-dark text-[17px] font-medium leading-normal font-jetBrain text-center px-6 max-w-[908px]">It is said that words cannot be unspoken, but they can be unwritten with MessageMoment’s in-the-moment chat service that guarantees your conversation is history. Start chatting now and experience the privacy and security of MessageMoment.</p>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center justify-center mt-[131px]">
            <div className="max-w-[1320px] w-full max-lg:w-full max-md:w-full bg-blue rounded-xl flex items-center flex-col pb-28">
              <Image src={chat} alt="" className="w-[128px] h-[128px] relative bottom-14" />
              <h3 className="text-[40px] font-bold  text-white text-center max-w-[1096px] px-8 max-md:text-[24px]">We believe that words can be a powerful tool for connection and communication, but it's also true that words cannot be unspoken.</h3>
              <p className="text-white text-center text-[17px] leading-6 font-medium mt-5 mb-12 max-w-[950px] px-36 max-md:px-4">That's why we created a live chat service that lets you unwrite those words, with a unique chat link and a secure, in-the-moment chat experience.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative bottom-28">
            <Image src={bg1} className=" rounded-[20px] max-w-[90%] max-md:hidden" alt="" />
            <Image src={bg2} className=" md:hidden rounded-[20px] max-w-[90%] max-md:visible" alt="" />
            <p className="text-center font-jetBrain text-[17px] font-medium mt-[70px] mb-[30px] px-8 max-w-[950px]">Our team has developed a platform that is not only simple and easy to use, but also guarantees your conversation will be history. With no account registration necessary and a mobile- responsive design, you can chat on the go, without leaving a trace. It never happened! Our unique security features include the option to "Make Secure," by sharing a token password, ensuring that only those you invite can enter the chat.</p>
            <button className={`flex justify-center items-center rounded-md h-[46px] w-[300px] px-5 bg-blue hover:bg-opacity-80 text-white font-jetBrain font-bold`}>Try MessageMoment</button>
          </div>
        </div>
      </div>

      <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
        <div className="flex justify-center items-center gap-[60px] py-40 max-md:py-24 max-md:flex-col">
          <div className="flex justify-center items-center">
            <Image src={bg3} className=" w-[500px] h-[300px]  rounded-[20px] max-md:w-full" alt="" />
          </div>
          <div>
            <h3 className="text-[60px] max-md:text-[34px] max-md:px-5 font-bold leading-[70px]  text-dark max-w-[538px] pr-6 max-md:tracking-[-0.5px] max-md:leading-[34px]">We take the privacy of our users seriously</h3>
            <p className="font-jetBrain text-[17px] font-medium mt-[20px] max-w-[538px] max-md:px-5">We have implemented the appropriate security measures to protect your data. We understand the importance of having a safe and secure space to communicate, and MessageMoment provides just that.</p>
          </div>
        </div>
      </div>
      <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
        <div className="flex justify-center items-center flex-row-reverse gap-[60px] py-40 max-md:py-24 max-md:flex-col">
          <div className="flex justify-center items-center">
            <Image src={bg4} className=" w-[500px] h-[300px]  rounded-[20px] max-md:w-full" alt="" />
          </div>
          <div>
            <h3 className="text-[60px] max-md:text-[34px] max-md:px-5 font-bold leading-[70px]  text-dark max-w-[538px] pr-6 max-md:tracking-[-0.5px] max-md:leading-[34px]">The solution you've been searching for</h3>
            <p className="font-jetBrain text-[17px] font-medium mt-[20px] max-w-[538px] max-md:px-5">Our mission is to provide a reliable and trustworthy platform for discreet conversations between known parties. Whether you're looking to keep a conversation private or just need a secure space to communicate, MessageMoment is the solution you've been searching for.</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col items-center justify-center ">
          <div className="max-w-[1320px] w-full max-lg:w-full max-md:w-full bg-dark rounded-xl flex items-center flex-col pb-28">
            <Image src={light} alt="" className="w-[128px] h-[128px] relative bottom-14" />
            <h3 className="text-[40px] font-bold  text-white text-center max-w-[1096px] px-8 max-md:text-[24px]">We are dedicated to delivering an unparalleled user experience and are always looking for ways to improve our services.</h3>
            <p className="text-white text-center text-[17px] leading-6 font-medium mt-5 mb-12 max-w-[950px] px-36 max-md:px-4">
              If you have any questions, concerns, feedback or would like to advertise with MessageMoment, please do not hesitate to{' '}
              <Link href="/" className="underline">
                {' '}
                Contact Us.
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative bottom-28">
          <Swiper />
          <p className="text-center font-jetBrain text-[17px] font-medium mt-[70px] mb-[30px] px-4 max-w-[950px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nibh id nunc commodo scelerisque. Donec neque justo, hendrerit quis laoreet sed, consectetur vitae enim. Vestibulum elementum urna eu lectus feugiat laoreet. Donec tincidunt libero et urna laoreet accumsan. Curabitur at porta lectus, eget maximus neque. Nulla pellentesque nunc turpis, id interdum lacus consequat non. Donec nec placerat augue, nec vehicula metus.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
