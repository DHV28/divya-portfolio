import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "var(--bg)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeOut 0.5s ease-out forwards",
        animationDelay: "0.8s",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "3px solid var(--border-subtle)",
          borderTop: "3px solid var(--accent)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeOut {
            to {
              opacity: 0;
              visibility: hidden;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PageLoader;
