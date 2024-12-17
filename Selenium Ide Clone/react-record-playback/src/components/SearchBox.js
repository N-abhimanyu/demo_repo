// src/components/SearchBox.js
import React, { useState } from "react";

const SearchBox = () => {
  const [url, setUrl] = useState("");

  const handleSearch = () => {
    if (!url) {
      alert("Please enter a valid URL.");
      return;
    }
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    window.open(formattedUrl, "_blank");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "80%",
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
