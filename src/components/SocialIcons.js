'use client';

import Image from 'next/image';
import X from '/public/images/x-icon.png';
import Facebook from '/public/images/facebook.png';
import Instagram from '/public/images/instagram.png';
import Youtube from '/public/images/youtube.png';
import XWhite from '/public/images/white-x-icon.png';
import FacebookWhite from '/public/images/white-facebook.png';
import InstagramWhite from '/public/images/white-instagram.png';
import YoutubeWhite from '/public/images/white-youtube.png';
import { useAppContext } from '@/context/AppContext';

const SocialIcons = ({ pR = 'lg:pr-[30px]' }) => {
  const { mobileNav } = useAppContext();
  return (
    <ul className={`flex ${pR}  gap-[15px]`}>
      <li>
        <a href="#">
          <Image src={mobileNav ? XWhite : X} alt="X" />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src={mobileNav ? InstagramWhite : Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src={mobileNav ? FacebookWhite : Facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src={mobileNav ? YoutubeWhite : Youtube} alt="Youtube" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
