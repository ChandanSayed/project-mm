const FooterNavItems = ({ classes = '', color = 'text-dark' }) => {
  return (
    <ul className={`flex flex-col lg:flex-row gap-[11px] lg:gap-[30px] justify-center ${classes}`}>
      <li>
        <a href="#" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          About
        </a>
      </li>
      <li>
        <a href="#" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Help & Support
        </a>
      </li>
      <li>
        <a href="#" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className={`font-medium text-sm lg:text-[17px] ${color}`}>
          Terms of Use
        </a>
      </li>
    </ul>
  );
};

export default FooterNavItems;
