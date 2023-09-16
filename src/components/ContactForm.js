import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-b from-blue to-blue-0">
      <form action="#" className="max-w-[1096px] mx-auto border border-black border-opacity-10 ">
        <div className="flex">
          <div>
            <label htmlFor="name">First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
