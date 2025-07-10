"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    charterBotConfig?: {
      subdomain: string;
      baseUrl: string;
    };
  }
}

export default function CharterBot() {
  useEffect(() => {
    // Set up CharterBot configuration
    window.charterBotConfig = {
      subdomain: "tampabaydemocharters",
      baseUrl: "https://charter-bot.com",
    };

    // Create and load the script
    const script = document.createElement("script");
    script.src = "https://charter-bot.com/embed.js";
    script.async = true;

    script.onerror = () => {
      console.error("Failed to load CharterBot script");
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.charterBotConfig;
    };
  }, []);

  return null;
}
