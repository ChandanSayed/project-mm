'use client';

const NavItems = ({ classes = 'pl-[50px]', color = 'text-black' }) => {
  return (
    <>
      <ul className={`lg:flex gap-[30px] lg:pl-[50px] items-center ${classes}`}>
        <li>
          <a href="#" className={`font-medium text-base ${color}`}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={`font-medium text-base ${color}`}>
            Help & Support
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
