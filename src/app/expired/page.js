import React from 'react';
import error from '/public/icons/error-404.svg';
import LogoHeader from '@/components/LogoHeader';
import NavLessPageFooter from '@/components/NavLessPageFooter';
import BlurSection from '@/components/BlurSection';
import CookiesContainer from '@/components/CookiesContainer';

const page = () => {
  return (
    <>
      <LogoHeader />
      <div className="lg:bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% border-t border-black border-opacity-10">
        <div className="max-w-[720px] mx-auto">
          <BlurSection img={error} pt="pt-[85px] lg:pt-[108px]" heading={`The chat session you were invited to with this link is no longer available`} description={`Return to the homepage to generate a new chat session.`} padding={'pt-[239px] pb-[218px] lg:pt-[258px] lg:pb-[224px]'} sessionLink={true} />
        </div>
      </div>
      <NavLessPageFooter />
      <CookiesContainer />
    </>
  );
};

export default page;
