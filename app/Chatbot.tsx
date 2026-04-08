"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const botText = getBotResponse(input);

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botMessage = { role: "bot", text: botText };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  const getBotResponse = (input) => {
    const msg = input.toLowerCase();

    if (msg.includes("skills") || msg.includes("tech")) {
      return "Great question! I specialize in React, Next.js, and Firebase. I enjoy building interactive and user-friendly applications.";
    }

    if (msg.includes("project")) {
      return "I’ve built projects like PixelPulse Portfolio and AI-based apps, focusing on clean UI and real-world problem solving.";
    }

    if (msg.includes("name") || msg.includes("who are you")) {
      return "Hi! I’m Swathi P V, a passionate developer exploring modern web technologies and AI integration.";
    }

    if (msg.includes("experience")) {
      return "I’m currently gaining experience by building real-world projects in frontend and AI.";
    }

    if (msg.includes("contact")) {
      return "You can connect with me via LinkedIn or through my portfolio contact section!";
    }

    return "Hmm interesting 🤔 — try asking about my skills, projects, or experience!";
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        💬
      </button>

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl rounded-2xl p-4 flex flex-col animate-fadeIn">
          
          {/* Header */}
          <div className="text-center font-semibold text-lg mb-2 text-gray-800">
            🤖 AI Assistant
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto mb-2 space-y-3 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 px-3 rounded-2xl text-sm max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="bg-gray-200 text-gray-800 p-2 px-3 rounded-2xl w-fit text-sm animate-pulse">
                Typing...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <input
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 p-2 rounded-lg mb-2 text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:opacity-90 transition"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}