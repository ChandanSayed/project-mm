import Image from 'next/image';
import grayLogo from '/public/images/gray-logo.svg';

const ChatFooter = () => {
  return (
    <div className="mt-3 border-t border-white border-opacity-10">
      <Image src={grayLogo} alt="Logo" className="mx-auto my-[15px]" />
      <ul className="text-center font-medium text-[11px] text-white mb-[15px]">
        <li className="leading-6">
          <a href="/">About MessageMoment</a>
        </li>
        <li className="leading-6">
          <a href="/">FAQs</a>
        </li>
        <li className="leading-6">
          <a href="/">Privacy</a>
        </li>
        <li className="leading-6">
          <a href="/">Terms of Use</a>
        </li>
      </ul>
      <p className="text-center text-[9px] font-medium mb-5 px-7">Copyright © 2023 MessageMoment. All rights reserved.</p>
    </div>
  );
};

export default ChatFooter;
