import React, { useState } from "react";
import DOMPurify from "dompurify";
import BreadCrumbs from "../components/BreadCrumbs";

import { LiaPhoneSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sanitize the input value
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col lg:gap-12 gap-8">
      <BreadCrumbs />
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-6">
        <div className="font-poppins flex flex-col justify-between gap-4 rounded-xl lg:shadow py-8 lg:px-8 px-2 max-w-96 min-h-[26rem]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-red text-white rounded-full p-2">
                <LiaPhoneSolid className="text-2xl" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>
          <div className="h-0.5 w-full bg-black/[.5]"></div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-red text-white rounded-full p-2">
                <AiOutlineMail className="text-2xl" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full rounded-xl lg:shadow py-8 lg:px-8 px-2 min-h-[26rem]">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-6">
              <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
                  />
                  <p
                    className={`${
                      formData.name === "" ? "" : "hidden"
                    } absolute top-0 bottom-0 p-3 opacity-50 select-none pointer-events-none`}
                  >
                    Your Name <span className="text-red">*</span>
                  </p>
                </div>
                <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
                />
                  <p
                    className={`${
                      formData.email === "" ? "" : "hidden"
                    } absolute top-0 bottom-0 p-3 opacity-50 select-none pointer-events-none`}
                  >
                    Your Email <span className="text-red">*</span>
                  </p>  
                </div>
                <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#F5F5F5] border-none focus:outline-0 rounded-md py-3 px-3 w-full"
                />
                <p
                    className={`${
                      formData.phone === "" ? "" : "hidden"
                    } absolute top-0 bottom-0 p-3 opacity-50 select-none pointer-events-none`}
                  >
                    Your Phone <span className="text-red">*</span>
                  </p>
                </div>
              </div>
              <div className="relative">
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#F5F5F5] resize-none min-h-40 border-none focus:outline-0 rounded-md py-3 px-3 w-full"
              />
                <p
                    className={`${
                      formData.message === "" ? "" : "hidden"
                    } absolute top-0 bottom-0 p-3 opacity-50 select-none pointer-events-none`}
                  >
                    Your Message <span className="text-red">*</span>
                  </p>  
              </div>
            </div>
            <div className="font-poppins flex justify-end items-center">
              <button className="bg-red font-medium text-white px-6 py-3 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
