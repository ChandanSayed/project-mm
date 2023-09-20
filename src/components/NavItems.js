'use client';

const NavItems = ({ classes = 'pl-[50px]' }) => {
  return (
    <>
      <ul className={`lg:flex gap-[30px] lg:pl-[50px] items-center ${classes}`}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Help & Support</a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
