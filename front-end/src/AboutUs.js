import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch("http://localhost:5002/about");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError("Failed to load About Us data.");
      }
    };

    fetchAbout();
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{data.title}</h1>

      <img
        src={data.imageUrl}
        alt="About Me"
        style={{ width: "250px", borderRadius: "10px", margin: "20px 0" }}
      />

      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
