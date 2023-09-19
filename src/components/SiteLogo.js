import Image from 'next/image';
import Logo from 'public/images/logo.png';
import Link from 'next/link';
const SiteLogo = () => {
  return (
    <Link href={`/`}>
      <Image className="w-full max-w-[196px]" src={Logo} alt="Logo" />
    </Link>
  );
};

export default SiteLogo;
