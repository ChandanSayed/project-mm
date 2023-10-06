import Link from 'next/link';

const SidebarComponents3 = ({ grid, textLeft, textRight, linkText, href, contentRight, contentLeft, linkContent, contentRight2 }) => {
  return (
    <div className={`border-b p-4 rounded-t-lg ${grid} grid grid-cols-1 lg:grid-cols-5`}>
      <div className="col-span-1 md:col-span-1">
        <p className={`text-[11px] ${textLeft} text-dark font-jetBrain`}>{contentLeft}</p>
      </div>
      <div className="col-span-4 md:col-span-4 flex justify-between items-center">
        <p className={`text-dark text-[12px] ${textRight} font-jetBrain leading-5 font-normal`}>
          {contentRight}
          <Link className={`text-blue underline ${linkText}`} href={href}>
            {' '}
            {linkContent}
          </Link>{' '}
          {contentRight2}
        </p>
      </div>
    </div>
  );
};

export default SidebarComponents3;
