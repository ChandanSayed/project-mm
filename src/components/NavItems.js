'use client';

const NavItems = ({ classes }) => {
  return (
    <>
      <ul className={`lg:flex gap-[30px] items-center pl-[50px] ${classes}`}>
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
