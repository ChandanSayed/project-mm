'use client';
import Image from 'next/image';
import one from '/public/home/1.svg';
import two from '/public/home/2.svg';
import three from '/public/home/3.svg';
import four from '/public/home/4.svg';
import { useState } from 'react';

const Steps = () => {
  const steps = [
    { id: 1, img: one, step: 'Step 1', stepName: 'Generate Link' },
    { id: 2, img: two, step: 'Step 2', stepName: 'Share It' },
    { id: 3, img: three, step: 'Step 3', stepName: 'Set Expiry' },
    { id: 4, img: four, step: 'Step 4', stepName: 'End Session' }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="steps-desktop hidden lg:flex gap-5">
      {steps.map((step, i) => {
        return (
          <div className={`step bg-white rounded-[20px] relative p-[30px] cursor-pointer ${index === i ? 'sm:w-[220px] lg:flex-1' : 'sm:w-[220px] lg:w-[260px] bg-opacity-20 text-center'}`} key={step.id} onMouseEnter={() => setIndex(i)}>
            <h2 className={`font-bold text-[34px] lg:text-[60px] absolute left-[30px] top-4 ${index === i ? 'text-blue' : 'text-white opacity-20'}`}>{step.id}</h2>
            <Image src={step.img} alt="step" className={`w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mt-[30px] ${index === i ? 'sm:ml-[45px] lg:ml-[60px]' : 'mx-auto'} mb-5`} />
            <span className={`font-jetBrain text-[13px]  ${index === i ? 'text-darkGrey' : 'text-white'}`}>{step.step}</span>
            <p className={`font-bold text-[17px] lg:text-[26px] ${index === i ? 'text-dark' : 'text-white'}`}>{step.stepName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
