import Link from 'next/link';

const FooterNavItems = ({ classes = '', color = 'text-dark' }) => {
  return (
    <ul className={`flex flex-col lg:flex-row gap-[11px] lg:gap-[30px] justify-center ${classes}`}>
      <li>
        <Link href="/about" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          About
        </Link>
      </li>
      <li>
        <a href="#" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Help & Support
        </a>
      </li>
      <li>
        <Link href="/privacy" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link href="/termsandcondition" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Terms of Use
        </Link>
      </li>
    </ul>
  );
};

export default FooterNavItems;
