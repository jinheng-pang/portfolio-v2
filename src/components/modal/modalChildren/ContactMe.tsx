"use client";
import SvgCopyIcon from "@/svgs/CopyIcon";
import "./contact-me.css";
import { useState } from "react";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);
  const email = "pangjinheng58@gmail.com";
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy!!!", err);
    }
  };

  if (copied) return <>Email copied!</>

  return (
    <button className="contact-me" onClick={handleClick}>
      <SvgCopyIcon />
      <span>{email}</span>
    </button>
  );
};

export default ContactMe;
