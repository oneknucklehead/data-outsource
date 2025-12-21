import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Connect = () => {
  // 1. FORM STATE & AXIOS LOGIC
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Email Issues",
    message: "",
  });

  const FORM_ENDPOINT = "https://formsubmit.co/ajax/zohebahmed1542@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await axios.post(FORM_ENDPOINT, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success === "true" || response.status === 200) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "Email Issues",
          message: "",
        });
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="text-white py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT CONTENT (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Let's get the help you
            <span className="text-theme"> need.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-sm md:text-base max-w-lg"
          >
            Don’t worry, we’re here to support you. Tell us about you issue. We
            endeavour to respond as soon as possible.
          </motion.p>
        </div>

        {/* RIGHT FORM (col-span-8) */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase text-white">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-[#1A1717] border border-theme rounded-lg p-3 outline-none focus:ring-1 focus:ring-theme transition-all placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-2 md:justify-end">
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-[#1A1717] border border-theme rounded-lg p-3 outline-none focus:ring-1 focus:ring-theme transition-all placeholder:text-white/30"
                />
              </div>
            </div>

            {/* EMAIL & SELECT ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase text-white/90">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#1A1717] border border-theme rounded-lg p-3 outline-none focus:ring-1 focus:ring-theme transition-all placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase text-white/90">
                  Please Select<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1A1717]  border border-theme rounded-lg p-3 outline-none appearance-none cursor-pointer text-white/70"
                  >
                    <option value="Email Issues">Email Issues</option>
                    <option value="IT Support">IT Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* MESSAGE BOX */}
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase text-white/90">
                Tell us about your issue<span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#1A1717] border border-theme rounded-lg p-3 outline-none focus:ring-1 focus:ring-theme transition-all resize-none placeholder:text-white/30"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON & FEEDBACK */}
            <div className="flex flex-col items-end gap-4">
              <button
                disabled={status === "submitting"}
                type="submit"
                className="bg-theme text-black font-bold py-3 px-14 rounded-full hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-500 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm"
                  >
                    Failed to send. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
