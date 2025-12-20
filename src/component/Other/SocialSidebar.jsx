import React, { useEffect, useState } from "react";

const socialLinks = [
  {
    href: "https://www.facebook.com/TUGAUT.TP",
    label: "Facebook",
    icon: "/images/facebookIcon.webp",
  },
  {
    href: "https://www.instagram.com/tugaut.tp/",
    label: "Instagram",
    icon: "/images/instagramIcon.webp",
  },
  {
    href: "https://www.instagram.com/tugaut.tp/",
    label: "TikTok",
    icon: "/images/tiktokIcon24Px.webp",
  },
  {
    href: "tel:+33612345678",
    label: "Téléphone",
    icon: "/images/Call.png",
  },
  {
    href: "mailto:contact@tugaut-tp.com",
    label: "Email",
    icon: "/images/emailIcon.webp",
  },
];

const SocialSidebar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("socialSidebarHidden");
    if (stored === "true") {
      setIsHidden(true);
    }
  }, []);

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem("socialSidebarHidden", "true");
  };

  const handleShow = () => {
    setIsHidden(false);
    localStorage.setItem("socialSidebarHidden", "false");
  };

  return (
    <>
      <div
        className={`social-sidebar d-none d-md-flex ${
          isHidden ? "social-sidebar--hidden" : ""
        }`}
        aria-hidden={isHidden}
      >
        <button
          className="social-sidebar__close"
          onClick={handleHide}
          aria-label="Masquer la barre sociale"
        >
          ×
        </button>
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="social-sidebar__link"
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            <img src={item.icon} alt={item.label} />
          </a>
        ))}
      </div>

      {isHidden && (
        <button
          className="social-sidebar-toggle d-none d-md-flex"
          onClick={handleShow}
          aria-label="Afficher les liens sociaux"
        >
          ☰
        </button>
      )}
    </>
  );
};

export default SocialSidebar;
