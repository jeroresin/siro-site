"use client";
import { useState } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      setMsg("Masukkan alamat email yang valid.");
      return;
    }
    setMsg("Membuka aplikasi email Anda...");
    const subject = encodeURIComponent("Pesan dari website");
    const body = encodeURIComponent("Email pengirim: " + value);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="em" className="sr">Alamat email Anda</label>
      <input
        id="em"
        type="email"
        placeholder="Alamat email Anda"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send</button>
      <p role="status">{msg}</p>
    </form>
  );
}
