import React from "react";

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
  return (
    <div className="social-sidebar d-none d-md-flex">
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
  );
};

export default SocialSidebar;
