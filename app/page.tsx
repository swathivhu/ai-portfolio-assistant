"use client";
import { useState, useEffect } from "react";
import Chatbot from "./chatbot";

export default function Home() {
  const roles = [
    "Python Fullstack Developer",
    "GEN-AI Enthusiast",
    "Problem Solver",
    "Prompt Engineer",
    "Content Creator"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const current = roles[index];
    const interval = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <main className="flex min-h-screen bg-black text-white px-10 items-center justify-between relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* LEFT SIDE */}
      <div className="max-w-xl space-y-6 z-10">
        <h1 className="text-5xl font-bold leading-tight">
          AI Portfolio Assistant 🤖
        </h1>

        {/* Animated Text */}
        <p className="text-xl text-purple-400 font-semibold h-6">
          {text}
        </p>

        <p className="text-gray-400 text-lg">
          A smart interactive assistant that answers questions about me,
          my skills, and my projects in real-time.
        </p>

        {/* Highlights */}
        <div className="flex gap-3 flex-wrap">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            ⚡ AI-like responses
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            🎨 Modern UI
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            💬 Chat Interface
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
            🚀 Live Project
          </span>
        </div>

        {/* CTA */}
        <div className="flex gap-4 mt-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <Chatbot />
    </main>
  );
}