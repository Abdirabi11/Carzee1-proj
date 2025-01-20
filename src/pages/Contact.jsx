import React from "react";
// import "./LiveChat.css";
export default function Contact() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  function toggleChat() {
    setIsChatOpen((prev) => !prev);
  }
  return (
    <section className="Contact-Container">
      <h1> Let’s Connect! </h1>
      <p>
        Have a question? <br />
        We’re here to assist you with all your car rental needs!{" "}
      </p>
      <button className="Contact-CTA-Btn">Get in Touch</button>
      <div className="Contact-Icon">
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a target="_blank">
          <i class="fa-solid fa-envelope"></i>
          support@carzee.com
        </a>
      </div>
      <div className="live-chat-container">
        <button className="chat-button" onClick={toggleChat}>
          💬
        </button>
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h3> Live Chat</h3>
              <button className="close-button" onClick={toggleChat}>
                X
              </button>
            </div>
            <div className="chat-body">
              <p>Hi! How can we assist you today?</p>
              {/* You can integrate a chat API here */}
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
