import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://georgefolio-6a500.web.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <form className='flex w-full bg-background justify-center text-textBlack items-center flex-col' onSubmit={handleSubmit}>
      <div className='flex lg:flex-row gap-5 mb-5 flex-col justify-between w-full'>
      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="firstName">First Name<span className='text-red-800'>*</span>:</label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder='Your First Name'
          value={formData.firstName}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="lastName">Last Name: <span className='text-gray-500 text-sm'>(optional)</span></label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="text"
          id="lastName"
          placeholder='Now your Last Name'
          name="lastName"
          value={formData.lastName}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="email">Email<span className='text-red-800'>*</span>:</label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="email"
          id="email"
          name="email"
          required
          placeholder='Email Please'
          value={formData.email}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      </div>
      <div className='flex flex-col w-full gap-2'>
        <label htmlFor="message">Message<span className='text-red-800'>*</span>:</label>
        <textarea
          className='w-full px-3 py-2 bg-gray-300'
          rows={10}
          id="message"
          name="message"
          required
          placeholder='What Do You Want To Say?'
          value={formData.message}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <button className='px-4 py-2 mt-12 text-2xl rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r from-secBackground  to-cards active:scale-95 duration-500 ease-in-out bg-cards text-cardsText' type="submit">Submit</button>
    </form>
  );
};

export default Contact;
