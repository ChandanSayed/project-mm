import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import parse from 'html-react-parser';

const page = () => {
  const currentDate = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[monthIndex];
  const day = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  const data = [
    {
      id: 1,
      question: '1. Introduction',
      answere: 'Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. This Privacy Policy sets out the manner in which MessageMoment collects, stores, uses, and protects the information provided by its users.'
    },
    {
      id: 2,
      question: '2. Information Collection and Use',
      answere: 'By using MessageMoment, you agree to the following conditions of use: <br/><br/> &#8226; You will not use  the platform for any illegal or unauthorized purpose. <br/> &#8226; You will not violate any laws in your jurisdiction. <br/> &#8226; You will not infringe upon the rights of others, including but not limited to, the right to privacy and intellectual property rights. <br/> &#8226; You will not use the platform in any manner that could damage, disable, overburden, or impair the platform. <br/> &#8226; You will not abuse or harm others in any manner through the use of the platform. <br/> &#8226; You represent and warrant that you are at least 16 years of age. If you are under 16 years of age, you may not use this platform without the express consent and supervision of a parent or legal guardian. By using this platform, you acknowledge and agree that you are solely responsible for complying with any and all laws and regulations applicable to you, including any age restrictions or other eligibility criteria.'
    },
    {
      id: 3,
      question: '3. Responsibility to Retain Information',
      answere: 'It is the responsibility of the user to capture or save any information they wish to retain as the platform is provided on an "as is" and "as available" basis.'
    },
    {
      id: 4,
      question: '4. Disclaimer of Warranties',
      answere: 'MessageMoment provides its platform on an “as is” and “as available” basis and makes no representations or warranties of any kind, express or implied, as to the operation of the platform or the information, content or materials included on the platform.'
    },
    {
      id: 5,
      question: '5. Indemnification',
      answere: 'You agree to indemnify, defend and hold harmless MessageMoment, its directors, officers, employees, agents, licensors, suppliers, and any third-party information providers to the service from and against all losses, expenses, damages, and costs, including reasonable attorneys’ fees, resulting from any violation of these T&Cs or any activity related to your use of the platform.'
    },
    {
      id: 6,
      question: '6. Termination of Use',
      answere: 'MessageMoment reserves the right to terminate or restrict your use of the platform at any time, with or without notice, for any or no reason, and without liability to you.'
    },
    {
      id: 7,
      question: '7. Amendments to these T&Cs',
      answere: 'MessageMoment reserves the right to update these T&Cs at any time and will notify users of any changes through the platform.'
    },
    {
      id: 8,
      question: '8. Governing Law',
      answere: 'These Terms and Conditions of Use (“T&Cs”) shall be governed by and construed in accordance with the laws of the jurisdiction in which you reside. Any dispute arising out of or in connection with these T&Cs or the use of MessageMoment shall be resolved exclusively through the courts of the jurisdiction in which you reside..'
    },
    {
      id: 9,
      question: '9. Entire Agreement',
      answere: 'These T&Cs, together with the <a href="/privacy" style="color: blue";>Privacy Policy</a>, constitute the entire agreement between you and MessageMoment relating to the use of the platform. If any provision of these T&Cs is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.'
    },
    {
      id: 10,
      question: '10. Contact Us',
      answere: 'If you have any questions regarding these Terms and Conditions of Use, please <a href="/" style="color: blue">Contact Us.</a>'
    }
  ];

  const replaceAnchorTagsWithLinks = (node, index) => {
    if (typeof node === 'string') {
      return node; // Return strings as is
    } else if (node.type === 'tag' && node.name === 'a' && node.attribs.href) {
      const href = node.attribs.href;
      console.log(node.children[0].data);
      return (
        <Link href={href} key={index} className="text-blue">
          {parse(node.children[0].data)}
        </Link>
      );
    }
    return undefined;
  };

  return (
    <div>
      <NavBar />

      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="container ">
          <h3 className="text-[40px] max-md:text-[24px] font-bold leading-normal px-[5%] lg:px-[8%] pt-[40px] text-dark">Terms and Conditions of Use</h3>
          <h3 className="bg-white w-[200px] h-[50px] border p-3 text-center rounded-md relative left-[8%] max-md:left-[5%] max-lg:left-[5%] mt-[48px] mb-[30px]">
            {currentMonthName} {day}, {currentYear}
          </h3>
          <div className="privacy-lists px-[5%] lg:px-[8%] pb-2">
            {data.map(list => {
              return (
                <div className="" key={list.id}>
                  <h3 className="text-[26px] max-md:text-[15px] font-bold text-blue mb-6 max-md:mb-[15px]">{list.question}</h3>
                  <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain mb-[40px] max-md:mb-[15px]">{parse(list.answere, { replace: replaceAnchorTagsWithLinks })}</p>
                </div>
              );
            })}
            <hr />
          </div>
          <div className="px-[5%] lg:px-[8%] pb-2">
            <h3 className="text-[26px] max-md:text-[15px] font-bold text-blue my-[30px] max-md:mb-[15px]">Credit</h3>
            <div className="mb-[18px]">
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain break-all">https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard</p>
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain text-lightGrey">Under Flaticon License</p>
            </div>
            <div className="mb-8">
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain break-all">https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"</p>
              <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain text-lightGrey">Image by rawpixel.com on Freepik</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
