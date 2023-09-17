import Image from 'next/image';
import Logo from 'public/images/logo.png';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
const NavBar = () => {
  return (
    <header className="bg-white max-w-[1440px] mx-auto p-[35px] md:px-[60px] md:py-[17px] ">
      <nav className="flex items-center w-full">
        <Link href={`/`}>
          <Image className="w-full max-w-[196px]" src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center justify-between w-full">
          <div className="left flex items-center pl-[50px]">
            <ul className="flex gap-[30px]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help & Support</a>
              </li>
            </ul>
          </div>
          <div className="right flex items-center">
            <SocialIcons />
            <button className="rounded-md h-[46px] w-[150px] bg-blue text-white px-5 hover:bg-opacity-80">Start</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
