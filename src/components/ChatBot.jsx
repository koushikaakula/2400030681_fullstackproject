import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I am HopeHive assistant! Ask me anything.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("donate")) return "Go to Donate page to add items ❤️";
    if (msg.includes("request")) return "You can request help in Request section 🙋‍♂️";
    if (msg.includes("login")) return "Click login at top right 🔐";
    if (msg.includes("browse")) return "Browse available donations in Browse page 📦";
    if (msg.includes("profile")) return "Profile shows your activity 👤";

    // fallback (chat anything)
    return "🤖 I'm here to help! Try asking about donate, request, login, or browsing.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const botMsg = { text: getBotReply(input), sender: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* CHAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#7C3AED",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          zIndex: 1000,
        }}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "white",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div style={{ padding: "10px", background: "#7C3AED", color: "white" }}>
            HopeHive Assistant
          </div>

          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    background: msg.sender === "user" ? "#EC4899" : "#eee",
                    color: msg.sender === "user" ? "white" : "black",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    display: "inline-block",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", padding: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, padding: "5px" }}
              placeholder="Type..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}