import React from 'react';

const ChatLandscape = () => {
  return (
    <div className="max-sm:hidden lg:hidden fixed inset-0 z-50 px-4 py-6 flex items-center justify-center bg-white bg-opacity-90">
      <div className="max-w-[760px] mx-auto text-center rounded-lg border border-black border-opacity-10 flex-1">
        <h2 className="text-blue text-2xl font-bold mb-[60px] pt-10">Please rotate your device to Portrait mode</h2>
        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none">
          <path d="M5.69142e-07 71.2727L1.3551e-07 107.636C9.95705e-08 110.65 1.19724 113.541 3.32833 115.672C5.45943 117.803 8.34981 119 11.3636 119L88.6364 119C91.6502 119 94.5406 117.803 96.6717 115.672C98.8028 113.541 100 110.65 100 107.636L100 71.2727C100 68.2589 98.8028 65.3685 96.6717 63.2374C94.5406 61.1063 91.6502 59.9091 88.6364 59.9091L11.3636 59.9091C8.34981 59.9091 5.45943 61.1063 3.32833 63.2374C1.19724 65.3685 6.05081e-07 68.2589 5.69142e-07 71.2727ZM95.4545 89.4545C95.4545 93.2273 92.4091 96.2727 88.6364 96.2727C84.8636 96.2727 81.8182 93.2273 81.8182 89.4545C81.8182 85.6818 84.8636 82.6364 88.6364 82.6364C92.4091 82.6364 95.4545 85.6818 95.4545 89.4545ZM77.2727 69L77.2727 109.909L13.6364 109.909L13.6364 69L77.2727 69Z" fill="#DDDDDD" />
          <path d="M106.727 0.90918H70.3636C67.3498 0.90918 64.4594 2.10642 62.3283 4.23751C60.1972 6.36861 59 9.25899 59 12.2728V89.5455C59 92.5594 60.1972 95.4498 62.3283 97.5808C64.4594 99.7119 67.3498 100.909 70.3636 100.909H106.727C109.741 100.909 112.631 99.7119 114.763 97.5808C116.894 95.4498 118.091 92.5594 118.091 89.5455V12.2728C118.091 9.25899 116.894 6.36861 114.763 4.23751C112.631 2.10642 109.741 0.90918 106.727 0.90918ZM88.5455 96.3637C84.7727 96.3637 81.7273 93.3183 81.7273 89.5455C81.7273 85.7728 84.7727 82.7274 88.5455 82.7274C92.3182 82.7274 95.3636 85.7728 95.3636 89.5455C95.3636 93.3183 92.3182 96.3637 88.5455 96.3637ZM109 78.1819H68.0909V14.5455H109V78.1819Z" fill="#363C4F" />
          <path d="M39.5 24L47 31.5L39.5 39" stroke="#363C4F" stroke-width="3" stroke-linecap="square" />
          <path d="M47 30C47.8284 30 48.5 30.6716 48.5 31.5C48.5 32.3284 47.8284 33 47 33V30ZM21.5 48V49.5H18.5V48H21.5ZM47 33H35V30H47V33ZM35 33C27.5439 33 21.5 39.0439 21.5 46.5H18.5C18.5 37.3871 25.8871 30 35 30V33ZM21.5 46.5V48H18.5V46.5H21.5Z" fill="#363C4F" />
        </svg>
        <p className="text-sm text-dark font-jetBrain mt-[60px] mb-[50px]">MessageMoment supports Portrait mode only.</p>
      </div>
    </div>
  );
};

export default ChatLandscape;
