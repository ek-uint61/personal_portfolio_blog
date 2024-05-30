"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { FormEvent, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { EXTRA_LINKS } from "@/constants";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const validateForm = (): boolean => {
    const { name, email, message } = form;

    if (name.trim().length < 3) {
      toast.error("Invalid Name");
      return false;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim().toLowerCase().match(emailRegex)) {
      toast.error("Invalid E-mail");
      return false;
    }

    if (message.trim().length < 5) {
      toast.error("Invalid Message");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return false;

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          to_name: form.name,
          to_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Thank You. I will get back to you as soon as possible.");
        },
        (error) => {
          console.log(error);
          toast.error("Sorry. Something went wrong.");
        }
      )
      .finally(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className=" rounded-lg mb-20 sm:mb-28 w-[min(100%,60rem)] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-8  shadow-2xl dark:shadow-lg flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm font-semibold">
  Please contact me directly at my <a href="mailto:emrklyci61@gmail.com" className=" font-bold text-blue-500">e-mail</a> or through this form.
</p>


      <div className="flex flex-col sm:flex-row gap-8 items-start  ">
        <form
          className="w-full max-w-lg bg-gradient-to-br from-gray-100 to-gray-300 dark:bg-gray-800 p-6 shadow-md flex flex-col dark:text-white border-2 border-[#ddd] dark:border-[#fddfdf] rounded-lg"
          autoComplete="off"
          autoCapitalize="off"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4 ">
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="text-sm font-semibold flex-1 h-14  px-1 border-2  border-[#ddd] rounded-lg dark:border-[#fddfdf] dark:bg-gray-700 focus:border-[#a5a5a5] focus:ring-1 focus:ring-[#a5a5a5]  transition-all outline-none"
              required
              maxLength={200}
              autoComplete="off"
              autoCapitalize="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" abc@xyz.com"
              className="text-sm font-semibold flex-1 h-14   border-2 border-[#ddd] rounded-lg dark:border-[#fddfdf] dark:bg-gray-700 focus:border-[#a5a5a5] focus:ring-1 focus:ring-[#a5a5a5] transition-all outline-none"
              required
              maxLength={100}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>

          <textarea
            className="text-sm font-semibold h-32  mb-4 border-2 border-[#ddd] rounded-lg dark:border-[#fddfdf] p-4 dark:bg-gray-700 focus:border-[#a5a5a5] focus:ring-1 focus:ring-[#a5a5a5] transition-all outline-none"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            cols={30}
            rows={10}
            required
            maxLength={500}
          />

          <button
            type="submit"
            className="text-sm font-semibold flex items-center justify-center gap-2 h-12 w-full  bg-gray-500 text-[#fff]  rounded-lg outline-none transition-all focus:scale-105 hover:bg-white hover:text-gray-700  dark:bg-blue-700 dark:hover:bg-blue-800  dark:hover:text-white active:scale-100 disabled:scale-100 disabled:bg-opacity-65 	"
              style={{ boxShadow: 'inset 0 0 0 2px #bbb'}}
            disabled={loading}
          >
            {loading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white " />
            ) : (
              <>
                Submit <FaPaperPlane className="text-xs opacity-100  rotate-icon" />
              </>
            )}
          </button>
        </form>
            
      </div>
    </motion.section>
  );
};

export default Contact;

