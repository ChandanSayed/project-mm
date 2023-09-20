'use client';
import Image from 'next/image';
import Logo from 'public/images/logo.png';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const SiteLogo = () => {
  const { mobileNav } = useAppContext();
  return (
    <Link href={`/`} className={`lg:block ${mobileNav ? 'hidden' : 'block'}`}>
      <Image className="w-full max-w-[196px]" src={Logo} alt="Logo" />
    </Link>
  );
};

export default SiteLogo;
