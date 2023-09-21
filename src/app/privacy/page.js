import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

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
      answere: 'Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. By using MessageMoment, you agree to be bound by these Terms and Conditions of Use (“T&Cs”). If you do not agree with these T&Cs, you should not use MessageMoment.'
    },
    {
      id: 2,
      question: '2. Information Collection and Use',
      answere: 'MessageMoment collects certain meta data when you use our platform however, we do not collect any personally identifiable information.'
    },
    {
      id: 3,
      question: '3. Data Storage and Protection',
      answere: 'MessageMoment takes the security of user data very seriously and has implemented appropriate technical and organizational measures to protect user data against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      id: 4,
      question: '4. Disclosure of Information',
      answere: 'MessageMoment will not sell, trade, or otherwise transfer your personal information to any third party except as required by law.'
    },
    {
      id: 5,
      question: '5. Amendments to this Privacy Policy',
      answere: 'MessageMoment reserves the right to update this Privacy Policy at any time and will notify users of any changes through the platform.'
    },
    {
      id: 6,
      question: '6. Contact Us',
      answere: `If you have any questions regarding this Privacy Policy, please ${(
        <a href="#" style="color: blue;">
          contact us
        </a>
      )}`
    }
  ];

  return (
    <div>
      <NavBar />

      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="container ">
          <h3 className="text-[40px] max-md:text-[24px] font-bold leading-normal px-[5%] lg:px-[8%] pt-[40px] text-dark">Privacy Policy</h3>
          <h3 className="bg-white w-[200px] h-[50px] border p-3 text-center rounded-md relative left-[8%] max-md:left-[5%] max-lg:left-[5%] mt-[48px] mb-[30px]">
            {currentMonthName} {day}, {currentYear}
          </h3>
          <div className="privacy-lists px-[5%] lg:px-[8%] pb-2">
            {data.map(list => {
              return (
                <div className="" key={list.id}>
                  <h3 className="text-[26px] max-md:text-[15px] font-bold text-blue mb-6 max-md:mb-[15px]">{list.question}</h3>
                  <p className="text-[15px] max-md:text-[13px] font-normal leading-normal max-h-min font-jetBrain mb-[40px] max-md:mb-[15px]">{list.answere}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
