import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-8 py-6 text-center text-sm text-gray-600">
      Made with ❤️ for Dashara — add your content and images. · ©{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
