import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-8 rounded-t-lg shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; 2024 Chic Jewelry. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Crafted with <span className="text-red-500">♥</span> for elegance and
          style.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
