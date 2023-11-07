import { useAppContext } from '@/context/AppContext';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';

const ShareButtonChat = ({ bg, display, setShowMenu, showShare, setShowShare }) => {
  const link = 'https://mm.me/5qjjc37f9sn';
  const shareButton = useRef();
  const { setChatScroll, setShareButtonTooltip } = useAppContext();

  function handleShareMenu() {
    setShowMenu(false);
    setShowShare(prev => !prev);
    setChatScroll(prev => !prev);
    if (document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeShare() {
    document.body.style.overflow = 'unset';
    setShowShare(false);
    setChatScroll(true);
  }

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setShareButtonTooltip(true);
    setTimeout(() => {
      setShareButtonTooltip(false);
    }, 3000);
  };
  const onCopyMobile = () => {
    navigator.clipboard.writeText(link);
    setShareButtonTooltip(true);
    setTimeout(() => {
      setShareButtonTooltip(false);
    }, 3000);
    setShowShare(false);
  };

  return (
    <div as="div" className={`relative ${display} text-left`}>
      <button onClick={handleShareMenu} ref={shareButton} className={`flex items-center justify-evenly rounded-md h-[46px] w-[46px] lg:w-[150px] lg:px-5 ${bg} hover:bg-opacity-80 text-base font-jetBrain font-bold`}>
        <svg className="max-lg:hidden" xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
          <path d="M6.54545 0L3.27273 3.27273H5.72727V10.6364H7.36364V3.27273H9.81818M11.4545 18H1.63636C0.728182 18 0 17.2636 0 16.3636V6.54545C0 6.11146 0.172402 5.69525 0.47928 5.38837C0.786157 5.08149 1.20237 4.90909 1.63636 4.90909H4.09091V6.54545H1.63636V16.3636H11.4545V6.54545H9V4.90909H11.4545C11.8885 4.90909 12.3048 5.08149 12.6116 5.38837C12.9185 5.69525 13.0909 6.11146 13.0909 6.54545V16.3636C13.0909 16.7976 12.9185 17.2138 12.6116 17.5207C12.3048 17.8276 11.8885 18 11.4545 18Z" fill="white" />
        </svg>
        <svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
          <path d="M7.27273 0L3.63636 3.63636L6.36364 3.63636L6.36364 11.8182H8.18182L8.18182 3.63636L10.9091 3.63636M12.7273 20L1.81818 20C0.809091 20 0 19.1818 0 18.1818L0 7.27273C0 6.79052 0.191558 6.32805 0.532533 5.98708C0.873508 5.6461 1.33597 5.45455 1.81818 5.45455L4.54545 5.45455V7.27273L1.81818 7.27273L1.81818 18.1818L12.7273 18.1818L12.7273 7.27273H10L10 5.45455H12.7273C13.2095 5.45455 13.6719 5.6461 14.0129 5.98708C14.3539 6.32805 14.5455 6.79052 14.5455 7.27273L14.5455 18.1818C14.5455 18.664 14.3539 19.1265 14.0129 19.4675C13.6719 19.8084 13.2095 20 12.7273 20Z" fill="#CCCCCC" />
        </svg>
        <span className="hidden mx-auto lg:block lg:mx-0">Share</span>
      </button>
      <Transition show={showShare} as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <ul className="fixed left-0 bottom-0 lg:bottom-auto lg:absolute right-0 lg:left-auto z-20 mt-2 lg:w-56 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white">
          <svg className="absolute right-[25px] -top-[3px] max-lg:hidden" xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
            <path d="M2.10826 0.403961C2.50807 -0.134653 3.31435 -0.134654 3.71417 0.40396L5.62357 2.97622C6.11338 3.63606 5.64239 4.57226 4.82062 4.57226L1.0018 4.57226C0.180033 4.57226 -0.290958 3.63606 0.19885 2.97622L2.10826 0.403961Z" fill="black" />
          </svg>
          <button onClick={closeShare} className={'lg:hidden absolute top-4 right-4'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
            </svg>
          </button>
          {/* <span className="bg-black absolute top-0 right-0 w-2"></span> */}
          <div className="pt-[13px] pb-[14px] pl-[22px] bg-[#000] border-b text-[14px] font-medium border-dark rounded-t-xl">Share Channel</div>
          <li>
            <a target="_blank" href="sms:1234567" className="bg-black  py-[6px] px-[24px] flex items-center  border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.99989 3C7.7374 2.99972 6.49635 3.32631 5.39753 3.94797C4.29871 4.56964 3.37956 5.46519 2.72954 6.54748C2.07952 7.62976 1.72077 8.8619 1.68822 10.124C1.65567 11.386 1.95043 12.635 2.54379 13.7494L1.74575 16.1435C1.67964 16.3417 1.67005 16.5545 1.71804 16.7578C1.76604 16.9612 1.86972 17.1472 2.01747 17.2949C2.16522 17.4427 2.3512 17.5464 2.55457 17.5943C2.75794 17.6423 2.97065 17.6327 3.16887 17.5666L5.56301 16.7686C6.54371 17.2902 7.63035 17.5815 8.74045 17.6205C9.85056 17.6595 10.9549 17.445 11.9698 16.9934C12.9846 16.5418 13.8833 15.865 14.5975 15.0142C15.3117 14.1635 15.8227 13.1612 16.0917 12.0835C16.3607 11.0058 16.3807 9.88092 16.1501 8.79434C15.9194 7.70775 15.4443 6.68799 14.7608 5.81244C14.0772 4.9369 13.2031 4.22858 12.2049 3.74127C11.2068 3.25396 10.1107 3.00046 8.99989 3ZM11.2499 12H6.74989C6.6007 12 6.45763 11.9407 6.35214 11.8352C6.24665 11.7298 6.18739 11.5867 6.18739 11.4375C6.18739 11.2883 6.24665 11.1452 6.35214 11.0398C6.45763 10.9343 6.6007 10.875 6.74989 10.875H11.2499C11.3991 10.875 11.5421 10.9343 11.6476 11.0398C11.7531 11.1452 11.8124 11.2883 11.8124 11.4375C11.8124 11.5867 11.7531 11.7298 11.6476 11.8352C11.5421 11.9407 11.3991 12 11.2499 12ZM11.2499 9.75H6.74989C6.6007 9.75 6.45763 9.69074 6.35214 9.58525C6.24665 9.47976 6.18739 9.33668 6.18739 9.1875C6.18739 9.03832 6.24665 8.89524 6.35214 8.78975C6.45763 8.68426 6.6007 8.625 6.74989 8.625H11.2499C11.3991 8.625 11.5421 8.68426 11.6476 8.78975C11.7531 8.89524 11.8124 9.03832 11.8124 9.1875C11.8124 9.33668 11.7531 9.47976 11.6476 9.58525C11.5421 9.69074 11.3991 9.75 11.2499 9.75Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] pt-[3px] text-white  font-jetBrain">Message</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:test@test.com" className="bg-black py-[6px] px-[24px] flex items-center border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM14.7 6.1875L9.3975 9.5025C9.1575 9.6525 8.8425 9.6525 8.6025 9.5025L3.3 6.1875C3.2248 6.14528 3.15894 6.08825 3.10642 6.01984C3.05389 5.95143 3.0158 5.87308 2.99443 5.78953C2.97307 5.70597 2.96888 5.61895 2.98212 5.53373C2.99536 5.44851 3.02575 5.36686 3.07146 5.29373C3.11717 5.22059 3.17724 5.15749 3.24804 5.10825C3.31885 5.059 3.3989 5.02463 3.48337 5.00722C3.56784 4.98981 3.65496 4.98973 3.73947 5.00696C3.82397 5.0242 3.9041 5.0584 3.975 5.1075L9 8.25L14.025 5.1075C14.0959 5.0584 14.176 5.0242 14.2605 5.00696C14.345 4.98973 14.4322 4.98981 14.5166 5.00722C14.6011 5.02463 14.6812 5.059 14.752 5.10825C14.8228 5.15749 14.8828 5.22059 14.9285 5.29373C14.9742 5.36686 15.0046 5.44851 15.0179 5.53373C15.0311 5.61895 15.0269 5.70597 15.0056 5.78953C14.9842 5.87308 14.9461 5.95143 14.8936 6.01984C14.8411 6.08825 14.7752 6.14528 14.7 6.1875Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] text-white  font-jetBrain">Mail</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.messenger.com/" className="bg-black  py-[6px] px-[24px] flex items-center border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C4.77 1.5 1.5 4.5975 1.5 8.775C1.5 10.9575 2.3925 12.855 3.855 14.1525C3.975 14.25 4.05 14.415 4.0575 14.58L4.095 15.915C4.125 16.3425 4.5525 16.62 4.9425 16.4475L6.4275 15.795C6.555 15.75 6.6975 15.7275 6.825 15.75C7.5 15.9525 8.25 16.05 9 16.05C13.23 16.05 16.5 12.9525 16.5 8.775C16.5 4.5975 13.23 1.5 9 1.5ZM13.5 7.095L11.3025 10.5975C10.95 11.145 10.2 11.2875 9.675 10.875L7.92 9.5775C7.84211 9.51908 7.74737 9.4875 7.65 9.4875C7.55263 9.4875 7.45789 9.51908 7.38 9.5775L5.01 11.3775C4.695 11.625 4.2825 11.25 4.5 10.905L6.6975 7.4025C7.05 6.855 7.8 6.7125 8.325 7.1025L10.08 8.4225C10.1579 8.48092 10.2526 8.5125 10.35 8.5125C10.4474 8.5125 10.5421 8.48092 10.62 8.4225L12.99 6.6225C13.305 6.375 13.7175 6.75 13.5 7.095Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] text-white  font-jetBrain">Messenger</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.whatsapp.com/" className="bg-black  py-[6px] px-[24px] flex items-center border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1.50301 16.5L2.51701 12.774C1.84886 11.6286 1.49783 10.326 1.50001 9C1.50001 4.85775 4.85776 1.5 9.00001 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9.00001 16.5C7.67459 16.5021 6.3725 16.1514 5.22751 15.4838L1.50301 16.5ZM6.29326 5.481C6.19641 5.48701 6.10177 5.51252 6.01501 5.556C5.93365 5.60207 5.85938 5.65967 5.79451 5.727C5.70451 5.81175 5.65351 5.88525 5.59876 5.9565C5.32157 6.31725 5.17247 6.76006 5.17501 7.215C5.17651 7.5825 5.27251 7.94025 5.42251 8.27475C5.72926 8.95125 6.23401 9.6675 6.90076 10.3312C7.06126 10.491 7.21801 10.6515 7.38676 10.8007C8.2143 11.5293 9.20045 12.0548 10.2668 12.3353L10.6935 12.4005C10.8323 12.408 10.971 12.3975 11.1105 12.3907C11.3289 12.3795 11.5422 12.3203 11.7353 12.2175C11.8335 12.1669 11.9293 12.1119 12.0225 12.0525C12.0225 12.0525 12.0548 12.0315 12.1163 11.985C12.2175 11.91 12.2798 11.8568 12.3638 11.769C12.426 11.7045 12.48 11.6287 12.5213 11.5425C12.5798 11.4202 12.6383 11.187 12.6623 10.9928C12.6803 10.8442 12.675 10.7633 12.6728 10.713C12.6698 10.6328 12.603 10.5495 12.5303 10.5142L12.0938 10.3185C12.0938 10.3185 11.4413 10.0343 11.043 9.85275C11.001 9.83445 10.956 9.82402 10.9103 9.822C10.8589 9.81673 10.8071 9.8225 10.7582 9.83893C10.7093 9.85536 10.6645 9.88206 10.6268 9.91725V9.91575C10.623 9.91575 10.5728 9.9585 10.0305 10.6155C9.99939 10.6573 9.95652 10.6889 9.90736 10.7063C9.85821 10.7237 9.805 10.726 9.75451 10.713C9.70564 10.6999 9.65777 10.6834 9.61126 10.6635C9.51826 10.6245 9.48601 10.6095 9.42226 10.5817L9.41851 10.5802C8.98944 10.3929 8.59218 10.1399 8.24101 9.83025C8.14651 9.74775 8.05876 9.65775 7.96876 9.57075C7.67369 9.28818 7.41655 8.96851 7.20376 8.61975L7.15951 8.5485C7.12773 8.50062 7.10203 8.44898 7.08301 8.39475C7.05451 8.2845 7.12876 8.196 7.12876 8.196C7.12876 8.196 7.31101 7.9965 7.39576 7.8885C7.46633 7.79874 7.53217 7.70536 7.59301 7.60875C7.68151 7.46625 7.70926 7.32 7.66276 7.20675C7.45276 6.69375 7.23526 6.183 7.01176 5.676C6.96751 5.5755 6.83626 5.5035 6.71701 5.48925C6.67651 5.48475 6.63601 5.48025 6.59551 5.47725C6.49479 5.47225 6.39386 5.474 6.29326 5.481Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] text-white  font-jetBrain">WhatsApp</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://telegram.org/" className="bg-black  py-[6px] px-[24px] flex items-center border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM12.48 6.6C12.3675 7.785 11.88 10.665 11.6325 11.9925C11.5275 12.555 11.3175 12.7425 11.1225 12.765C10.6875 12.8025 10.3575 12.48 9.9375 12.2025C9.2775 11.7675 8.9025 11.4975 8.265 11.0775C7.5225 10.59 8.0025 10.32 8.43 9.885C8.5425 9.7725 10.4625 8.025 10.5 7.8675C10.5052 7.84364 10.5045 7.81888 10.498 7.79535C10.4914 7.77183 10.4793 7.75025 10.4625 7.7325C10.4175 7.695 10.3575 7.71 10.305 7.7175C10.2375 7.7325 9.1875 8.43 7.14 9.81C6.84 10.0125 6.57 10.1175 6.33 10.11C6.06 10.1025 5.55 9.96 5.1675 9.8325C4.695 9.6825 4.3275 9.6 4.3575 9.3375C4.3725 9.2025 4.56 9.0675 4.9125 8.925C7.1025 7.9725 8.5575 7.3425 9.285 7.0425C11.37 6.1725 11.7975 6.0225 12.0825 6.0225C12.1425 6.0225 12.285 6.0375 12.375 6.1125C12.45 6.1725 12.4725 6.255 12.48 6.315C12.4725 6.36 12.4875 6.495 12.48 6.6Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] text-white  font-jetBrain">Telegram</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/" className="bg-black  py-[6px] px-[24px] flex items-center border-b border-dark border-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5ZM9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6517C7.05161 12.3549 8.00544 12.75 9 12.75C9.99456 12.75 10.9484 12.3549 11.6517 11.6517C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6517 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25ZM13.875 5.0625C13.875 4.81386 13.7762 4.5754 13.6004 4.39959C13.4246 4.22377 13.1861 4.125 12.9375 4.125C12.6889 4.125 12.4504 4.22377 12.2746 4.39959C12.0988 4.5754 12 4.81386 12 5.0625C12 5.31114 12.0988 5.5496 12.2746 5.72541C12.4504 5.90123 12.6889 6 12.9375 6C13.1861 6 13.4246 5.90123 13.6004 5.72541C13.7762 5.5496 13.875 5.31114 13.875 5.0625ZM9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75Z" fill="white" />
              </svg>
              <span className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px] text-white  font-jetBrain">Instagram</span>
            </a>
          </li>
          <li>
            <div className="bg-black py-[6px] px-[24px] pb-[22px] lg:rounded-b-xl border-dark ">
              <p className="bg-white mt-[10px] rounded-lg bg-opacity-10 text-[9px] font-semibold font-jetBrain px-5 py-[17px] max-lg:hidden">{link}</p>
              <div className="flex items-center cursor-pointer mt-[5px] max-lg:hidden" onClick={onCopy}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clipPath="url(#clip0_531_114)">
                    <path d="M11.9168 7.14375C12.1137 6.94691 12.3765 6.83006 12.6546 6.81579C12.9326 6.80152 13.2061 6.89085 13.4221 7.0665L13.5076 7.14375L15.0991 8.7345C15.9355 9.56594 16.412 10.6925 16.4262 11.8718C16.4404 13.051 15.9911 14.1888 15.175 15.0401C14.3588 15.8914 13.2411 16.3883 12.0623 16.4239C10.8835 16.4595 9.73779 16.0308 8.8718 15.2303L8.73455 15.099L7.1438 13.5075C6.94066 13.3034 6.82351 13.0292 6.81646 12.7414C6.80941 12.4535 6.91301 12.1739 7.10593 11.9601C7.29884 11.7464 7.56638 11.6147 7.85345 11.5923C8.14052 11.5698 8.42526 11.6583 8.64905 11.8395L8.73455 11.9168L10.3261 13.5075C10.7395 13.9178 11.2959 14.1519 11.8783 14.1604C12.4607 14.1689 13.0237 13.9512 13.4489 13.5531C13.8741 13.155 14.1283 12.6075 14.1582 12.0258C14.188 11.4441 13.9911 10.8735 13.6088 10.434L13.5076 10.326L11.9168 8.7345C11.7059 8.52354 11.5874 8.23744 11.5874 7.93913C11.5874 7.64082 11.7059 7.35472 11.9168 7.14375ZM6.61355 6.6135C6.81043 6.41666 7.07329 6.29981 7.35133 6.28554C7.62936 6.27127 7.90281 6.3606 8.1188 6.53625L8.2043 6.6135L11.3866 9.79575C11.5911 9.99959 11.7095 10.2743 11.7171 10.563C11.7247 10.8517 11.621 11.1322 11.4275 11.3466C11.234 11.5609 10.9654 11.6927 10.6775 11.7145C10.3895 11.7363 10.1042 11.6465 9.88055 11.4638L9.79505 11.3865L6.61355 8.20426C6.40265 7.99329 6.28417 7.70719 6.28417 7.40888C6.28417 7.11057 6.40265 6.82447 6.61355 6.6135ZM2.90105 2.901C3.72173 2.08047 4.82768 1.60871 5.98793 1.58425C7.14818 1.5598 8.27303 1.98453 9.12755 2.76975L9.26555 2.901L10.8556 4.4925C11.0587 4.69658 11.1758 4.97078 11.1829 5.25864C11.1899 5.5465 11.0863 5.8261 10.8934 6.03988C10.7005 6.25365 10.433 6.38531 10.1459 6.40775C9.85884 6.43019 9.57409 6.3417 9.3503 6.1605L9.2648 6.08325L7.6748 4.4925C7.26193 4.07972 6.70477 3.84359 6.12101 3.83398C5.53726 3.82437 4.97263 4.04205 4.5464 4.44102C4.12016 4.84 3.8657 5.38903 3.83676 5.97214C3.80782 6.55526 4.00667 7.12679 4.3913 7.566L4.49255 7.67401L6.08255 9.2655C6.28569 9.46958 6.40285 9.74378 6.40989 10.0316C6.41694 10.3195 6.31334 10.5991 6.12043 10.8129C5.92752 11.0266 5.65998 11.1583 5.37291 11.1807C5.08584 11.2032 4.80109 11.1147 4.5773 10.9335L4.49255 10.8563L2.90105 9.2655C2.48311 8.84763 2.15157 8.35152 1.92538 7.80551C1.69919 7.25949 1.58276 6.67427 1.58276 6.08325C1.58276 5.49224 1.69919 4.90702 1.92538 4.361C2.15157 3.81499 2.48311 3.31888 2.90105 2.901Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_531_114">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px]  text-white font-jetBrain">Copy URL</p>
              </div>
              <div className="flex items-center cursor-pointer mt-[5px] lg:hidden" onClick={onCopyMobile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clipPath="url(#clip0_531_114)">
                    <path d="M11.9168 7.14375C12.1137 6.94691 12.3765 6.83006 12.6546 6.81579C12.9326 6.80152 13.2061 6.89085 13.4221 7.0665L13.5076 7.14375L15.0991 8.7345C15.9355 9.56594 16.412 10.6925 16.4262 11.8718C16.4404 13.051 15.9911 14.1888 15.175 15.0401C14.3588 15.8914 13.2411 16.3883 12.0623 16.4239C10.8835 16.4595 9.73779 16.0308 8.8718 15.2303L8.73455 15.099L7.1438 13.5075C6.94066 13.3034 6.82351 13.0292 6.81646 12.7414C6.80941 12.4535 6.91301 12.1739 7.10593 11.9601C7.29884 11.7464 7.56638 11.6147 7.85345 11.5923C8.14052 11.5698 8.42526 11.6583 8.64905 11.8395L8.73455 11.9168L10.3261 13.5075C10.7395 13.9178 11.2959 14.1519 11.8783 14.1604C12.4607 14.1689 13.0237 13.9512 13.4489 13.5531C13.8741 13.155 14.1283 12.6075 14.1582 12.0258C14.188 11.4441 13.9911 10.8735 13.6088 10.434L13.5076 10.326L11.9168 8.7345C11.7059 8.52354 11.5874 8.23744 11.5874 7.93913C11.5874 7.64082 11.7059 7.35472 11.9168 7.14375ZM6.61355 6.6135C6.81043 6.41666 7.07329 6.29981 7.35133 6.28554C7.62936 6.27127 7.90281 6.3606 8.1188 6.53625L8.2043 6.6135L11.3866 9.79575C11.5911 9.99959 11.7095 10.2743 11.7171 10.563C11.7247 10.8517 11.621 11.1322 11.4275 11.3466C11.234 11.5609 10.9654 11.6927 10.6775 11.7145C10.3895 11.7363 10.1042 11.6465 9.88055 11.4638L9.79505 11.3865L6.61355 8.20426C6.40265 7.99329 6.28417 7.70719 6.28417 7.40888C6.28417 7.11057 6.40265 6.82447 6.61355 6.6135ZM2.90105 2.901C3.72173 2.08047 4.82768 1.60871 5.98793 1.58425C7.14818 1.5598 8.27303 1.98453 9.12755 2.76975L9.26555 2.901L10.8556 4.4925C11.0587 4.69658 11.1758 4.97078 11.1829 5.25864C11.1899 5.5465 11.0863 5.8261 10.8934 6.03988C10.7005 6.25365 10.433 6.38531 10.1459 6.40775C9.85884 6.43019 9.57409 6.3417 9.3503 6.1605L9.2648 6.08325L7.6748 4.4925C7.26193 4.07972 6.70477 3.84359 6.12101 3.83398C5.53726 3.82437 4.97263 4.04205 4.5464 4.44102C4.12016 4.84 3.8657 5.38903 3.83676 5.97214C3.80782 6.55526 4.00667 7.12679 4.3913 7.566L4.49255 7.67401L6.08255 9.2655C6.28569 9.46958 6.40285 9.74378 6.40989 10.0316C6.41694 10.3195 6.31334 10.5991 6.12043 10.8129C5.92752 11.0266 5.65998 11.1583 5.37291 11.1807C5.08584 11.2032 4.80109 11.1147 4.5773 10.9335L4.49255 10.8563L2.90105 9.2655C2.48311 8.84763 2.15157 8.35152 1.92538 7.80551C1.69919 7.25949 1.58276 6.67427 1.58276 6.08325C1.58276 5.49224 1.69919 4.90702 1.92538 4.361C2.15157 3.81499 2.48311 3.31888 2.90105 2.901Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_531_114">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="ml-5 lg:ml-3 text-[13px] font-semibold leading-[23px]  text-white font-jetBrain">Copy URL</p>
              </div>
            </div>
          </li>
        </ul>
      </Transition>
      <div className={`fixed inset-0 bg-white opacity-5 z-10 ${showShare ? '' : 'hidden'}`} onClick={closeShare}></div>
    </div>
  );
};

export default ShareButtonChat;
