"use client";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function EmailSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({ type: "success", message: data.message });
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setFeedback({
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Failed to send message. Try again!",
      });
    }

    setLoading(false);

    // Clear feedback message after 5 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 2000);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
      {/* Background Glow */}
      <div className="bg-[radial-gradient(circle,_rgba(220,38,38,0.6)_0%,_rgba(0,0,0,0)_70%)] rounded-full h-80 w-80 z-0 blur-2xl absolute top-1/2 left-0 transform -translate-x-1/2 translate-y-1/3"></div>

      {/* Left Side */}
      <div className="z-10 relative">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm always ready to grab new opportunities. My inbox is always open —
          whether you have a question or just need someone to talk to, I'll try
          my best to get back to you! Feel free to reach out for collaborations,
          exciting ideas, or even just to say hello. Let’s connect, create, and
          make something awesome together!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            className="text-white"
            href="https://github.com/Ankit-Mishra0"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            className="text-white"
            href="https://www.linkedin.com/in/ankit-mishra-3728b2286"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6 ml-0.5">
            <label
              className="text-white block text-sm font-medium"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
              type="email"
              id="email"
              required
              placeholder="yourname@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6 ml-0.5">
            <label
              className="text-white block text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
              type="text"
              id="subject"
              required
              placeholder="What’s on your mind?"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div className="mb-6 ml-0.5">
            <label
              className="text-white block text-sm font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
              id="message"
              required
              placeholder="Let’s talk about..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-800"
            } text-white font-medium py-2.5 rounded-lg w-full`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback Message */}
          {feedback && (
            <p
              className={`mt-4 text-center font-semibold ${
                feedback.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;