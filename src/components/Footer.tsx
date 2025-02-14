import React from "react";

const InstagramFooter = () => {
  const footerStyles = {
    footer: {
      padding: "20px 0",
      textAlign: "center" as const,
      maxWidth: "1000px",
      margin: "0 auto",
    },
    linksContainer: {
      display: "flex" as const,
      flexWrap: "wrap" as const,
      justifyContent: "center" as const,
      gap: "16px",
      margin: "20px 0",
      padding: "0 15px",
    },
    link: {
      color: "#8e8e8e",
      fontSize: "12px",
      textDecoration: "none" as const,
      whiteSpace: "nowrap" as const,
    },
    divider: {
      borderTop: "1px solid #dbdbdb",
      margin: "20px 0",
    },
    languageSelector: {
      margin: "15px 0",
      padding: "5px 10px",
      borderRadius: "4px",
      border: "1px solid #dbdbdb",
      backgroundColor: "transparent" as const,
      color: "#8e8e8e",
      fontSize: "12px",
    },
    copyright: {
      color: "#8e8e8e",
      fontSize: "12px",
      marginTop: "20px",
    },
  };

  const footerLinks = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];

  return (
    <div style={footerStyles.footer as React.CSSProperties}>
      <div style={footerStyles.linksContainer as React.CSSProperties}>
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            style={footerStyles.link as React.CSSProperties}
          >
            {link}
          </a>
        ))}
      </div>

      {/* <div style={footerStyles.divider as React.CSSProperties}></div> */}

      <div
        style={
          {
            ...footerStyles.linksContainer,
            gap: "8px",
          } as React.CSSProperties
        }
      >
        <select style={footerStyles.languageSelector as React.CSSProperties}>
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
        </select>
        <p style={footerStyles.copyright as React.CSSProperties}>
          © 2025 Instagram from Meta
        </p>
      </div>
    </div>
  );
};

export default InstagramFooter;
