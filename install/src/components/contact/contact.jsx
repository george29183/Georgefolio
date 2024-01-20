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
      const response = await fetch('http://localhost:3005/send-email', {
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
    <form className='flex w-full bg-[#f5f5f5] justify-center items-center flex-col' onSubmit={handleSubmit}>
      <div className='flex lg:flex-row gap-5 mb-5 flex-col justify-between w-full'>
      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="firstName">First Name:</label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="lastName">Last Name:</label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className='flex lg:w-[30%] w-full flex-col gap-2'>
        <label htmlFor="email">Email:</label>
        <input
          className=' w-full px-4 py-2 bg-gray-300'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      </div>
      <div className='flex flex-col w-full gap-2'>
        <label htmlFor="message">Message:</label>
        <textarea
          className='w-full bg-gray-300'
          rows={10}
          id="message"
          name="message"
          value={formData.message}
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <button className='px-4 py-2 mt-12 text-2xl rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r from-sky-950 via-sky-700 to-sky-500 active:scale-95 duration-500 ease-in-out bg-sky-800 text-[#f5f5f5]' type="submit">Submit</button>
    </form>
  );
};

export default Contact;
