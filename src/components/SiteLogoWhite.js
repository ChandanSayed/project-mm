import Image from 'next/image';
import Logo from 'public/images/logo-white.png';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const SiteLogoWhite = () => {
  const { mobileNav } = useAppContext();
  return (
    <Link href={`/`} className={`lg:hidden ${mobileNav ? 'block' : 'hidden'}`}>
      <Image className="w-full max-w-[196px]" src={Logo} alt="Logo" />
    </Link>
  );
};

export default SiteLogoWhite;
