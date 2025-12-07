import { useState } from "react";
import axios from "axios";
// import { Oval } from "react-loader-spinner";
import { motion } from "framer-motion";
import Button from "../../components/Button";
const ContactBanner = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () =>
    form.name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email); // phone is optional

  const handleSubmit = () => {
    if (!validate()) {
      setResult("⚠️ Please fill the required fields correctly.");
      return;
    }

    setLoading(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";

    axios
      .post("https://formsubmit.co/ajax/zohebahmed1542@gmail.com", {
        ...form,
        _captcha: false,
        _template: "table",
        _subject: "New Contact Form Submission",
        _url: window.location.href, // required for CORS success
      })
      .then(() => {
        setResult("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "" });
        setLoading(false);
      })
      .catch(() => {
        setResult("❌ Submission failed. Try again later.");
        setLoading(false);
      });
  };
  return (
    <div className="text-white">
      <motion.div className="h-fit flex flex-col items-center justify-center md:-mt-18 min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="md:py-10 grid md:grid-cols-2 gap-18 items-center">
            {/* Left Content */}
            <motion.div
              // initial={{ opacity: 0, x: -40 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-center">
                <motion.div
                  // whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-fit inline-block px-4 py-1.5 text-xs md:text-sm font-semibold md:font-medium border md:border-2 border-white rounded-full text-white"
                >
                  Services
                </motion.div>
                <span className="max-w-[120px] md:max-w-fit">
                  <svg
                    width="100%"
                    height="9"
                    viewBox="0 0 229 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.19209e-05 4.33014L4.33014 8.66027L8.66027 4.33014L4.33014 1.19209e-05L1.19209e-05 4.33014ZM4.33014 4.33014V5.08014H228.281V4.33014V3.58014H4.33014V4.33014Z"
                      fill="#FFBA1F"
                    />
                  </svg>
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                Contact
                <span className="text-theme"> Us</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                Tell us about the issue you are experiencing below and a member
                of the team will be in touch to help you out.
              </motion.p>
              <div>
                <section className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    {/* NAME */}
                    <label className="text-sm font-semibold text-white flex gap-1">
                      NAME<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full mb-6 mt-1 px-5 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none"
                    />

                    {/* EMAIL */}
                    <label className="text-sm font-semibold text-white flex gap-1">
                      EMAIL<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full mb-6 mt-1 px-5 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none"
                    />

                    {/* PHONE (optional) */}
                    <label className="text-sm font-semibold text-white">
                      PHONE NO.{" "}
                      <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="1234567890"
                      className="w-full mb-8 mt-1 px-5 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none"
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-theme hover:bg-yellow-300/30 text-black w-full py-3 rounded-full text-lg font-semibold transition-all duration-300"
                    >
                      {loading ? (
                        <div className="flex justify-center">
                          {/* <Oval height={24} width={24} color="black" strokeWidth={4} /> */}
                          Loading..
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>

                    {/* RESULT MESSAGE */}
                    <p className="text-center text-white mt-4">{result}</p>
                  </motion.div>
                </section>
              </div>
            </motion.div>

            {/* Right Side Graphic */}
            <motion.div className="relative flex w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="z-10 rounded-2xl w-full h-full overflow-hidden"
              >
                <span className="w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.005328887216!2d88.3840591759984!3d22.54147313410915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027695e69aaaab%3A0xefec1a5722ccf2a0!2sClick%20Baitz!5e0!3m2!1sen!2sin!4v1765106481384!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-2 md:top-5 left-2 md:left-5 w-full h-full mx-auto rounded-2xl p-0.5 border-theme border-2"
              >
                {/* Inner container */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactBanner;
