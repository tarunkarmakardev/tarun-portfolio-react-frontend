import React from "react";
import Portfolio from "../../api/PortfolioAPI";
import { useState, useEffect } from "react";

export default function Resume() {
  const [DownloadLink, setDownloadLink] = useState("");

  const getDownloadLink = async () => {
    const response = await Portfolio("/api/resume");
    setDownloadLink(response.data[0].resume_file_url);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getDownloadLink();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div style={{ margin: "1.5rem 0" }}>
      <a href={DownloadLink} download className="btn-accent">
        Download Resume
      </a>
    </div>
  );
}
