import { useState } from "react";

function ContactSlide() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`contact-slide ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)}>
        {open ? "×" : "Contact"}
      </button>
      {open && (
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
export default ContactSlide;
